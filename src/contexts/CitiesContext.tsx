import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { City } from "../interfaces/City";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase-config";
import toast from "react-hot-toast";
import { getUser } from "../firebase/auth";
import { Action, State } from "../interfaces/CitiesContext";

const CitiesContext = createContext<ContextValueProps | undefined>(undefined);

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {} as City,
  error: "",
};

type Reducer = (state: State, action: Action) => State;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city: City) => {
          return city.id != action.payload;
        }),
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("unknown action type");
  }
}

interface ContextValueProps {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  getCity: (id: string) => Promise<void>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCity: (id: string) => Promise<void>;
  addCity: (data: City) => Promise<void>;
}

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer<Reducer>(
    reducer,
    initialState
  );
  const [active, setActive] = useState<boolean>(false);
  // Firebase
  const citiesRef = collection(db, "users");
  const user = getUser();

  useEffect(() => {
    fetchAllCities();
    // eslint-disable-next-line
  }, []);

  const fetchAllCities = async () => {
    dispatch({ type: "loading" });
    try {
      const q = query(citiesRef, where("user", "==", user));
      const snapShot = await getDocs(q);
      const result: City[] = [];
      snapShot.forEach((doc) => {
        result.push(doc.data()["data"]);
      });

      console.log("Fetched all city");
      dispatch({ type: "cities/loaded", payload: result });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading datas...",
      });
    }
  };

  const getCity = async (id: string) => {
    dispatch({ type: "loading" });
    try {
      const q = query(citiesRef, where("data.id", "==", Number(id)), limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dispatch({ type: "city/loaded", payload: doc.data()["data"] });
      });
      console.log("Get City");
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading single data...",
      });
    }
  };

  const deleteCity = async (id: string) => {
    dispatch({ type: "loading" });
    try {
      dispatch({ type: "city/deleted", payload: Number(id) });

      const q = query(citiesRef, where("data.id", "==", Number(id)), limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      console.log("Delete City");
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleted city...",
      });
    }
  };

  const addCity = async (data: City) => {
    dispatch({ type: "loading" });
    try {
      await addDoc(collection(db, "users"), {
        user: auth.currentUser?.uid,
        data,
      });
      console.log("Added City");

      dispatch({ type: "city/created", payload: data });
      toast.success("data successfully added");
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error add city...",
      });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        active,
        setActive,
        deleteCity,
        addCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider ");
  return context;
}

// eslint-disable-next-line
export { CitiesProvider, useCities };

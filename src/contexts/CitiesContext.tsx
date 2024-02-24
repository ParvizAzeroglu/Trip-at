import React, { createContext, useContext, useEffect, useState } from "react";
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
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const cookies = new Cookies();

const CitiesContext = createContext<ContextValueProps | undefined>(undefined);

interface ContextValueProps {
  cities: City[];
  isLoading: boolean;
  currentCity: Partial<City>;
  getCity: (id: string) => Promise<void>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCity: (id: string) => Promise<void>;
  addCity: (data: City) => Promise<void>;
}

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<boolean>(false);
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState({});
  // Firebase
  const citiesRef = collection(db, "users");
  const user = cookies.get("auth-token");

  useEffect(() => {
    fetchAllCities();
  }, []);

  const fetchAllCities = async () => {
    setIsLoading(true);
    const q = query(citiesRef, where("user", "==", user));
    const snapShot = await getDocs(q);
    const result: City[] = [];
    snapShot.forEach((doc) => {
      result.push(doc.data()["data"]);
    });
    setCities(() => result);
    setIsLoading(false);
  };

  const getCity = async (id: string) => {
    try {
      // setIsLoading(true);
      const q = query(citiesRef, where("data.id", "==", Number(id)), limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setCurrentCity(() => doc.data()["data"]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCity = async (id: string) => {
    setCities((cities) =>
      cities.filter((city) => {
        return city.id != Number(id);
      })
    );
    const q = query(citiesRef, where("data.id", "==", Number(id)), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };

  const addCity = async (data: City) => {
    try {
      await addDoc(collection(db, "users"), {
        user: auth.currentUser?.uid,
        data,
      });
      setCities((cities) => [...cities, data]);
      toast.success("data successfully added");
    } catch (err) {
      console.log("failed to add data ", err);
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

// ?
export { CitiesProvider, useCities };

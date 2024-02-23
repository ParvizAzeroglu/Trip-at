import React, { createContext, useContext, useEffect, useState } from "react";
import { City } from "../interfaces/City";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase-config";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const CitiesContext = createContext<ContextValueProps | undefined>(undefined);

interface ContextValueProps {
  cities: City[];
  isLoading: boolean;
  currentCity: Partial<City>;
  getCity: (id: string) => Promise<void>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<boolean>(false);
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState({});
  const citiesRef = collection(db, "users");
  const user = cookies.get("auth-token");
  // Delete here

  useEffect(() => {
    const fetchAllCities = async () => {
      const q = query(citiesRef, where("user", "==", user));
      const snapShot = await getDocs(q);
      const result = [];
      snapShot.forEach((doc) => {
        result.push(doc.data()["data"]);
      });
      setCities(() => result);
    };

    fetchAllCities();
  }, []);

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const usernameToMatch = auth.currentUser?.displayName;

      if (!usernameToMatch) {
        console.log("Kullanıcı adı bilgisi bulunamadı.");
        return;
      }

      const querySnapshot = await getDocs(
        query(
          citiesRef,
          where("user", "==", usernameToMatch),
          where("id", "==", Number(id))
        )
      );

      if (querySnapshot.size > 0) {
        const documentData = querySnapshot.docs[0].data();
        console.log("Eşleşen Belge:", documentData);
      } else {
        console.log("Eşleşen belge bulunamadı.");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        active,
        setActive,
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

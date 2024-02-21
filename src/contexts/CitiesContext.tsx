import React, { createContext, useContext, useEffect, useState } from "react";
import { City } from "../interfaces/City";

const URL = "http://localhost:8000";
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
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState({});

  // Delete here

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  // Delete here

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      console.log("%c Error fetching data", "color: red;");
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

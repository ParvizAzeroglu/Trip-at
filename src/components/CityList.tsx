import React from "react";
import styles from "../styles/CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";

interface CityListProps {
  cities: City[];
  isLoading: boolean;
}

interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

const CityList: React.FC<CityListProps> = ({ cities, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }
  // Add Message.tsx
  if (!cities.length) return <p>there is no data here</p>;
  return (
    <div className={styles.container}>
      <ul className={styles.cityList}>
        {cities?.map((city: City) => {
          return <CityItem city={city} key={city.id} />;
        })}
      </ul>
    </div>
  );
};
export default CityList;

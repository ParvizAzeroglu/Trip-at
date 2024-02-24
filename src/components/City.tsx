import { useParams } from "react-router-dom";
import styles from "../styles/City.module.css";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";

const City = () => {
  const { id } = useParams();
  const { getCity, currentCity } = useCities();

  useEffect(() => {
    if (id !== undefined) {
      getCity(id);
    }
  }, [id, getCity]);

  return (
    <div className={styles.container}>
      <h1>
        {currentCity.cityName} <span>{currentCity.emoji}</span>
      </h1>
      <span>{currentCity.country}</span>
      <p>{currentCity.notes}</p>
    </div>
  );
};

export default City;

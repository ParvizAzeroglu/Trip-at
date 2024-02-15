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
  }, [id]);

  return (
    <div className={styles.container}>
      <p>{currentCity.cityName}</p>
    </div>
  );
};

export default City;

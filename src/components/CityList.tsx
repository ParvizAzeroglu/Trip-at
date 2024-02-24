import styles from "../styles/CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
import { City } from "../interfaces/City";

const CityList = () => {
  const { cities, isLoading } = useCities();

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

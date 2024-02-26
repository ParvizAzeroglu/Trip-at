import styles from "../styles/CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
import { City } from "../interfaces/City";
import Message from "./Message";

const CityList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return (
      <div style={{ margin: "1.5rem", marginTop: "4rem" }}>
        <Message type="warning">The Cities section is empty</Message>
      </div>
    );

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

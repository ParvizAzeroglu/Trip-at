import React from "react";
import styles from "../styles/Countries.module.css";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import { City } from "../interfaces/City";
import Message from "./Message";

const Countries: React.FC = () => {
  const { cities, isLoading } = useCities();

  const countries = cities.reduce((acc: City[], cur) => {
    if (!acc.map((element) => element.country).includes(cur.country)) {
      return [...acc, cur];
    }
    return acc;
  }, []);

  if (isLoading) {
    <Spinner />;
  }

  if (!cities.length) {
    return (
      <div style={{ margin: "1.5rem", marginTop: "4rem" }}>
        <Message type="warning">The Countries section is empty</Message>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {countries?.map((country) => (
          <li key={country.id} className={styles["list-item"]}>
            <span>{country.emoji}</span>
            <p>{country.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

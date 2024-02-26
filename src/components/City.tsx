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
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>
        {currentCity?.cityName}
        <span style={{ marginLeft: "2rem", fontSize: "2rem" }}>
          {currentCity?.emoji}
        </span>
      </h1>
      <span
        style={{
          fontSize: "1.75rem",
          opacity: "0.8",
          textAlign: "center",
          display: "block",
          margin: ".5rem",
        }}
      >
        {currentCity?.country}
      </span>
      <p
        className="text"
        style={{
          marginTop: "2rem",
          display: "block",
          backgroundColor: "var(--secondary-bg)",
          padding: "0.3rem",
          borderRadius: "10px",
        }}
      >
        {currentCity?.notes}
      </p>
    </div>
  );
};

export default City;

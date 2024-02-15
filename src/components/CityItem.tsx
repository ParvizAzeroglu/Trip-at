import { Link } from "react-router-dom";
import styles from "../styles/CityItem.module.css";

interface CityItemProps {
  city: {
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
  };
}

// React.FC<CityItemProps>

const CityItem = ({ city }: CityItemProps) => {
  // console.log(city.position);
  return (
    <li className={styles.container}>
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={styles.link}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h4 className={styles["city-name"]}>{city.cityName}</h4>
        <p className={styles.time}>{city.date}</p>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;

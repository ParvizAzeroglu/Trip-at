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
  return <li className={styles.container}>{city.id}</li>;
};

export default CityItem;

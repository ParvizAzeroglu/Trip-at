import React from "react";
import styles from "../styles/CityList.module.css";

interface CityListProps {
  cities: object;
  isLoading: boolean;
}

const CityList: React.FC<CityListProps> = ({ cities, isLoading }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.cityList}>
        <li>Lorm</li>
        <li>Lorm</li>
        <li>Lorm</li>
      </ul>
    </div>
  );
};

export default CityList;

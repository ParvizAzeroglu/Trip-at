import { useParams, useSearchParams } from "react-router-dom";
import styles from "../styles/City.module.css";

const City = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { id } = useParams();
  return (
    <div className={styles.container}>
      City {id} and position : {lat}, {lng}
    </div>
  );
};

export default City;

import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../styles/Map.module.css";

const Map = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const handleClick = () => {
    setSearchParams({ lat: `${23424}`, lng: `${134}` });
  };
  return (
    <div className={styles.container} onClick={() => navigate("/app/form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={handleClick}>Change pos</button>
    </div>
  );
};

export default Map;

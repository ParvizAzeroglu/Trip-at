// import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "../styles/Map.module.css";
import { LatLngTuple } from "leaflet";

const Map = () => {
  // const navigate = useNavigate();
  const position: LatLngTuple = [51.505, -0.09];

  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.container}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.container}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

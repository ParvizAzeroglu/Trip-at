import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import styles from "../styles/Map.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  // const position: LatLngTuple = [51.505, -0.09];
  const [position, setPosition] = useState<number[]>([51.505, -0.09]);
  const { cities } = useCities();

  return (
    <div className={styles.container}>
      <MapContainer
        center={[position[0], position[1]]}
        zoom={7}
        scrollWheelZoom={true}
        className={styles.container}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities?.map((city) => {
          return (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>{city.cityName}</Popup>
            </Marker>
          );
        })}
        <DetectPosition position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
};

const DetectPosition = ({
  position,
  setPosition,
}: {
  position: number[];
  setPosition: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const navigate = useNavigate();

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      // console.log(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You Selected this location</Popup>
    </Marker>
  );
};

export default Map;

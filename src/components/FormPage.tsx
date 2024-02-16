import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../styles/FormPage.module.css";
import { useCities } from "../contexts/CitiesContext";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import ReverseGeolocation from "../utilities/ReverseGeolocation";
const FormPage = () => {
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  const navigate = useNavigate();
  const { setActive } = useCities();
  const cityNameRef = useRef<HTMLInputElement>(null);
  const timeFormRef = useRef<HTMLInputElement>(null);
  const textareaFormRef = useRef<HTMLTextAreaElement>(null);
  const [city, setCity] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (mapLat !== null && mapLng !== null) {
        const reverseGeolocation = await ReverseGeolocation(mapLat, mapLng);
        setCity([reverseGeolocation.city, reverseGeolocation.countryCode]);
      }
    };

    fetchData();
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (timeFormRef.current) {
      const currentDate = new Date();
      timeFormRef.current.value = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
    }
  }, []);

  const handleSaveEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // console.log(cityNameRef.current?.value);
    navigate("/app/cities");
  };

  const handleBackEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate("/app/cities");
    setActive(() => false);
  };

  return (
    <form className={styles.container}>
      <label htmlFor="cityNameForm">City name</label>
      <input
        type="text"
        id="cityName"
        maxLength={50}
        ref={cityNameRef}
        value={city![0]}
      />
      <label htmlFor="" id="timeForm">
        When did you go ?
      </label>
      <input type="text" id="timeForm" maxLength={50} ref={timeFormRef} />
      <label htmlFor="" id="textareaForm">
        Notes about you trip to
      </label>
      <textarea
        name=""
        id="textareaForm"
        rows={5}
        maxLength={200}
        ref={textareaFormRef}
      ></textarea>
      <div className={styles.action}>
        <button className={`button ${styles.back}`} onClick={handleBackEvent}>
          Back
        </button>
        <button className={`button ${styles.save}`} onClick={handleSaveEvent}>
          Save
        </button>
      </div>
    </form>
  );
};

export default FormPage;

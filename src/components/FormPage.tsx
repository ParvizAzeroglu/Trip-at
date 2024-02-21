import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../styles/FormPage.module.css";
import { useCities } from "../contexts/CitiesContext";
import { MouseEventHandler, useEffect, useRef } from "react";
import useReverseGeolocation from "../hook/useReverseGeolocation";
import { getRandomNumber } from "../utilities/getRandomNumber";
const FormPage = () => {
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  const navigate = useNavigate();
  // Refs
  const cityNameRef = useRef<HTMLInputElement>(null);
  const timeFormRef = useRef<HTMLInputElement>(null);
  const textareaFormRef = useRef<HTMLTextAreaElement>(null);
  // Custom
  const { setActive } = useCities();
  const { data } = useReverseGeolocation(mapLat, mapLng);

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
    const formData = {
      cityName: cityNameRef.current?.value,
      date: timeFormRef.current?.value,
      notes: textareaFormRef.current?.value,
    };
    const MergedData = {
      ...formData,
      country: data?.countryName,
      emoji: data?.countryCode,
      position: {
        lat: data?.latitude,
        lng: data?.longitude,
      },
      id: getRandomNumber(),
    };
    console.log(MergedData);
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
        value={data?.city || ""}
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

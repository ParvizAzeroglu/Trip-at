import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "../styles/FormPage.module.css";

const FormPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  // return (
  //   <div className={styles.container}>
  //     <h1>FormPage</h1>
  //     <h2>{(mapLng, mapLng)}</h2>
  //     <button
  //       onClick={(e) => {
  //         e.preventDefault();
  //         navigate(-1);
  //       }}
  //     >
  //       Back
  //     </button>
  //   </div>
  // );

  return (
    <form className={styles.container}>
      <label htmlFor="cityNameForm">City name</label>
      <input type="text" id="cityName" maxLength={50} />
      <label htmlFor="" id="timeForm">
        When did you go ?
      </label>
      <input type="text" id="timeForm" maxLength={50} />
      <label htmlFor="" id="textareaForm">
        Notes about you trip to
      </label>
      <textarea name="" id="textareaForm" rows={5} maxLength={200}></textarea>
    </form>
  );
};

// function FormPage() {
//   return <div>Hello world</div>;
// }

export default FormPage;

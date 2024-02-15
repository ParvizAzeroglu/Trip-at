import { useNavigate } from "react-router-dom";
import styles from "../styles/FormPage.module.css";

const FormPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>FormPage</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

// function FormPage() {
//   return <div>Hello world</div>;
// }

export default FormPage;

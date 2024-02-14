import { useNavigate } from "react-router-dom";
import styles from "../styles/Form.module.css";

const Form = () => {
  const navigate = useNavigate();
  return (
    <form className={styles.container}>
      <h1>Form</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </button>
    </form>
  );
};

export default Form;

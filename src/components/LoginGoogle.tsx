import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import styles from "../styles/LoginGoogle.module.css";
import googleImg from "../assets/google.webp";

const cookies = new Cookies();

const LoginGoogle = () => {
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user.uid;
        cookies.set("auth-token", user);
        toast.success(
          "Registration Successful. In 3 seconds, you will be redirected to the app!"
        );
        setTimeout(() => {
          window.location.href = "/app";
        }, 3000);
      })
      .catch(() => {
        toast.error("Registration failed. Try again");
      });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoogle} className={styles.google}>
        <img src={googleImg} alt="Login with google" />
      </button>
    </div>
  );
};

export default LoginGoogle;

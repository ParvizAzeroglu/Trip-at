import PageNav from "../components/PageNav";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <>
      <PageNav />
      <span className="space-90"></span>
      <div className={styles.container}>
        <form action="" className={`shadow ${styles.form}`}>
          <input
            type="text"
            placeholder="Gmail"
            className="shadow"
            maxLength={30}
          />
          <input
            type="password"
            placeholder="Password"
            className="shadow"
            maxLength={30}
          />
          <button className="cta shadow">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

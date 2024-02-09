// import React from 'react'
import PageNav from "../components/PageNav";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <>
      <PageNav />
      <span className="space-90"></span>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Gmail" className="shadow" />
          <input type="password" placeholder="Password" className="shadow" />
          <button className="cta shadow">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

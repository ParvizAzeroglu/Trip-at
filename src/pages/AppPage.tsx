// import React from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "../styles/AppPage.module.css";

const AppPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppPage;

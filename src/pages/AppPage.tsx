import React from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "../styles/AppPage.module.css";
import { Toaster } from "react-hot-toast";

const AppPage = () => {
  return (
    <div className={styles.container}>
      <Toaster />
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppPage;

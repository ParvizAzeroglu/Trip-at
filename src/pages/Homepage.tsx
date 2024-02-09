// import React from 'react'

import styles from "../styles/Homepage.module.css";
// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

// type Props = {}

const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <PageNav />
        <main className={styles["main-container"]}>
          <h1 className={`heading ${styles["homepage-heading"]}`}>
            You travel the world. Trip at keeps track of your adventures.
          </h1>
          <p className="text">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <a href="/app" className="cta">
            Start tracking now
          </a>
        </main>
      </div>
    </>
  );
};

export default Homepage;

import { useState, useEffect, useRef } from "react";
import styles from "../styles/PageNav.module.css";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  const [active, setActive] = useState(false);
  const navContainerRef = useRef<HTMLUListElement | null>(null);
  const navButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node) &&
        navButtonRef.current &&
        !navButtonRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <img src="src\assets\brand.png" alt="Logo img" />
        <h2 className={`heading ${styles["brand-name"]}`}>Trip at</h2>
      </NavLink>
      <button
        ref={navButtonRef}
        className={styles["navbar-hamburger"]}
        onClick={handleClick}
      >
        <img src="./src/assets/hamburger.png" alt="Hamburger Menu Png" />
      </button>
      <ul
        ref={navContainerRef}
        className={`${styles["navbar-nav"]} ${
          active ? "navbar-nav-active" : ""
        }`}
      >
        <li className={styles["navbar-item"]}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className={styles["navbar-item"]}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className={styles["navbar-item"]}>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;

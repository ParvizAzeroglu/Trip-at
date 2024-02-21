import { useEffect, useRef } from "react";
import styles from "../styles/Sidebar.module.css";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import { useCities } from "../contexts/CitiesContext";
import iconPng from "../assets/two-way-arrow.png";

const Sidebar = () => {
  const sideButtonRef = useRef<HTMLButtonElement>(null);
  const sideContainerRef = useRef<HTMLDivElement>(null);
  const { active, setActive } = useCities();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (active == true) return;
      if (
        sideContainerRef.current &&
        !sideContainerRef.current.contains(event.target as Node) &&
        sideButtonRef.current &&
        !sideContainerRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [active]);

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <div
      className={`${styles.sidebar} ${active ? "sidebar-active" : ""}`}
      ref={sideContainerRef}
    >
      <button
        className={styles.toggle}
        onClick={handleClick}
        ref={sideButtonRef}
      >
        <img src={iconPng} alt="" />
      </button>
      <div className="sidebar-body">
        <AppNav />
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;

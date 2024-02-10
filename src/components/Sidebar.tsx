import { useEffect, useRef, useState } from "react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [active, setActive] = useState<boolean>(false);
  const sideButtonRef = useRef(null);
  const sideContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideContainerRef.current &&
        !sideContainerRef.current.contains(event.target) &&
        sideButtonRef.current &&
        !sideContainerRef.current.contains(event.target)
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
    <div
      className={`${styles.sidebar} ${active ? "sidebar-active" : ""}`}
      ref={sideContainerRef}
    >
      <button
        className={styles.toggle}
        onClick={handleClick}
        ref={sideButtonRef}
      >
        <img src="./src/assets/two-way-arrow.png" alt="" />
      </button>
      <div className="sidebar-body"></div>
    </div>
  );
};

export default Sidebar;

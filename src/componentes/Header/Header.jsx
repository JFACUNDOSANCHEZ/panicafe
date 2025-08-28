import React from "react";
import styles from "./Header.module.css";
import videoBg from "../../assets/videobg2.mp4";
import logo from "../../assets/LogoPani.png";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <video
        className={styles.videoBackground}
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className={styles.overlay}></div>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <div className={styles.content}>
        <div className={styles.mainLogo}>
          <img src={logo} alt="PANICAFE" />
        </div>
        <button className={styles.ctaBtn}>
          DISCOVER APOLLONIA'S RECIPES
        </button>
      </div>
    </header>
  );
};

export default Header;
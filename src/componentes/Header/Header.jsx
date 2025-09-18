import React from "react";
import styles from "./Header.module.css";
import videoBg from "../../assets/videobg2.mp4";
import logo from "../../assets/LogoPani.png";
import Nav from "../Nav/Nav";
import Producto from "../producto/Producto";


const Header = () => {
  return (
    <>
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
          <br />  <br />
          <img src={logo} alt="PANICAFE" />
        </div>
        {/* <h2>#momentodipiacere</h2> */}
        {/* <button className={styles.ctaBtn}>
          DISCOVER APOLLONIA'S RECIPES
        </button> */}
      </div>


    </header>
        <Producto></Producto>
        
        </>
  );
};

export default Header;
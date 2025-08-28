import React from "react";
import styles from "./Nav.module.css";
import logoNav from "../../assets/pP3.png"; // Asegúrate de que la ruta sea correcta

const Nav = () => {
  return (
    <div className={styles.header}>
      {/* Contenedor del logo y el menú principal */}
      <div className={styles.leftNavGroup}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logoNav} alt="Logo" />
        </div>
        {/* Menú principal */}
        <nav className={styles.mainNav}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Franquicias</a></li>
            <li><a href="#contact">Carta</a></li>
          </ul>
        </nav>
      </div>
      {/* Menú secundario */}
      <nav className={styles.secondaryNav}>
        <ul>
          <li><a href="#lang">EN | €</a></li>
          <li><a href="#addresses">Our Addresses</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#account">My Account</a></li>
          <li><a href="#basket">Basket (0)</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
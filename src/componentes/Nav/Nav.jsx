import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom"; // Importa el componente Link
import logoNav from "../../assets/pP3.png";

const Nav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftNavGroup}>
        <div className={styles.logo}>
          {/* Usa Link para ir a la página de inicio */}
          <Link to="/"> 
            <img src={logoNav} alt="Logo" />
          </Link>
        </div>
        <nav className={styles.mainNav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* Aquí cambias el a por el Link y pones la ruta que definiste */}
            <li><Link to="/franquicias">Franquicias</Link></li>
            <li><Link to="/carta">Carta</Link></li>
          </ul>
        </nav>
      </div>
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
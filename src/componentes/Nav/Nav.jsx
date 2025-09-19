import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Nav.module.css";
import logoNavWhite from "../../assets/pP3.png";
import logoNavBlack from "../../assets/pb8.png";

const Nav = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario se ha desplazado más de 50px, activamos el estado de 'scrolled'
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // La lógica del fondo y los logos ahora se basa completamente en el scroll
  const currentLogo = scrolled ? logoNavBlack : logoNavBlack; // El logo siempre será el negro
  const headerBackgroundClass = scrolled
    ? styles.headerScrolledBackground
    : styles.headerWhiteBackground;

  return (
    <motion.div className={`${styles.navWrapper} ${scrolled ? styles.navScrolled : ""}`}>
      {/* La preNav se oculta con una transición */}
      <div className={`${styles.preNav} ${scrolled ? styles.preNavHidden : ""}`}>
          <div className={`${styles.preNav} ${scrolled ? styles.preNavHidden : ""}`}>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/panicafe" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/panicafe" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com/panicafe" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>
      </div>
      <motion.div
        className={`${styles.header} ${headerBackgroundClass} ${styles.themeDark}`}
      >
        <nav className={styles.centeredNav}>
          <ul className={styles.leftLinks}>
            <li><Link to="/somospanicafe">QUIÉNES SOMOS</Link></li>
            <li><Link to="/sucursales">SUCURSALES</Link></li>
          </ul>
          <div className={`${styles.logo} ${scrolled ? styles.logoScrolled : ""}`}>
            <Link to="/"><img src={currentLogo} alt="Logo Panicafé" /></Link>
          </div>
          <ul className={styles.rightLinks}>
            <li><Link to="/eeuu">PANICAFÉ EN EE.UU.</Link></li>
            <li><Link to="/contacto">CONTACTO</Link></li>
          </ul>
        </nav>
        <div className={styles.franquiciasBtnWrapper}>
          <Link to="/franquicias" className={styles.franquiciasBtn}>
            <span>FRANQUICIAS</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
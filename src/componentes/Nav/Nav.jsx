import React from "react";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import logoNavWhite from "../../assets/pP3.png";
import logoNavBlack from "../../assets/LogoPanicafe.png";
import { motion } from "framer-motion"; // Importamos motion

const Nav = () => {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/' || location.pathname === '/';
  
  const navContentThemeClass = isHomePage ? styles.themeLight : styles.themeDark;
  const navBackgroundClass = isHomePage ? styles.themeLight : styles.themeDark; // Esto controla el fondo

  const currentLogo = isHomePage ? logoNavWhite : logoNavBlack;

  // Variantes para la animación del contenedor principal de la navegación
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    },
  };

  // Variantes para los elementos individuales (logo y lista de enlaces)
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className={`${styles.header} ${navContentThemeClass} ${navBackgroundClass}`} // Añadimos la clase de fondo aquí
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.leftNavGroup} variants={itemVariants}>
        <div className={styles.logo}>
          <Link to="/"> 
            <img src={currentLogo} alt="Logo" />
          </Link>
        </div>
      </motion.div>
      <motion.nav className={styles.secondaryNav} variants={itemVariants}>
        <ul>
          <motion.li variants={itemVariants}><Link to="/">HOME</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/carta">QUIÉNES SOMOS</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/franquicias">PANICAFÉ EN EE.UU.</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/nosotros">SUCURSALES</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/contacto">CONTACTO</Link></motion.li>
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default Nav;

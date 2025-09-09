import React from "react";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import logoNavWhite from "../../assets/pP3.png";
import logoNavBlack from "../../assets/LogoPanicafe.png";
import { motion } from "framer-motion"; // Importamos motion

const Nav = () => {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/' || location.pathname === '/franquicias';
  
  const navContentThemeClass = isHomePage ? styles.themeLight : styles.themeDark;
  
  const currentLogo = isHomePage ? logoNavWhite : logoNavBlack;

  // Variantes para la animación del contenedor principal de la navegación
  const navVariants = {
    hidden: { opacity: 0, y: -50 }, // Inicia 50px por encima de su posición
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Rigidez del muelle, para un movimiento elástico
        damping: 20,   // Amortiguación, para suavizar el rebote
        staggerChildren: 0.1 // Retraso entre la animación de cada hijo
      }
    },
  };

  // Variantes para los elementos individuales (logo y lista de enlaces)
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // Usamos motion.div para aplicar la animación al contenedor principal
    <motion.div 
      className={`${styles.header} ${navContentThemeClass}`}
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
          {/* Se anima cada elemento de la lista por separado */}
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
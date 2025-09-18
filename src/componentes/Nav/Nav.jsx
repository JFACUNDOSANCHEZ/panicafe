import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import logoNavWhite from "../../assets/pP3.png";
import logoNavBlack from "../../assets/LogoPanicafe.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  const isHomePage = location.pathname === "/";
  const navContentThemeClass = isHomePage ? styles.themeLight : styles.themeDark;
  const navBackgroundClass = isHomePage ? styles.themeLight : styles.themeDark;
  const currentLogo = isHomePage ? logoNavWhite : logoNavBlack;

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Textos personalizados para cada opción
  const menuContent = {
    home: "Bienvenido a Panicafé, donde cada taza cuenta una historia.",
    carta: "Conocé nuestra historia y la pasión detrás de cada grano.",
    franquicias: "Panicafé cruza fronteras: conoce nuestra expansión en EE.UU.",
    sucursales: "Encontrá tu sucursal más cercana y viví la experiencia Panicafé.",
    contacto: "¿Dudas o sugerencias? Estamos acá para escucharte.",
  };

  return (
    <motion.div
      className={styles.navWrapper}
      onMouseLeave={() => setActiveItem(null)} // se cierra al salir del nav
    >
      {/* Header fijo */}
      <motion.div
        className={`${styles.header} ${navContentThemeClass} ${navBackgroundClass}`}
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
            <motion.li
              variants={itemVariants}
              onMouseEnter={() => setActiveItem("home")}
            >
              <Link to="/">HOME</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              onMouseEnter={() => setActiveItem("carta")}
            >
              <Link to="/carta">QUIÉNES SOMOS</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              onMouseEnter={() => setActiveItem("franquicias")}
            >
              <Link to="/franquicias">PANICAFÉ EN EE.UU.</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              onMouseEnter={() => setActiveItem("sucursales")}
            >
              <Link to="/nosotros">SUCURSALES</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              onMouseEnter={() => setActiveItem("contacto")}
            >
              <Link to="/contacto">CONTACTO</Link>
            </motion.li>
          </ul>
        </motion.nav>
      </motion.div>

      {/* Contenido desplegable debajo del header */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className={styles.hoverContent}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "150px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Agregamos el efecto de fade-in en el texto */}
            <motion.p
              className={styles.hoverText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {menuContent[activeItem]}
            </motion.p>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Nav;

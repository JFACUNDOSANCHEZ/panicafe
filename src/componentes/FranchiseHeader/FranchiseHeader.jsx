import React from "react";
import styles from "./FranchiseHeader.module.css";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import logo from '../../assets/LogoPani.png'; // Asegúrate de que esta ruta sea correcta


const FranchiseHeader = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  showNav = true 
}) => {
  return (
    <header className={styles.header}>
      {showNav && (
        <div className={styles.navContainer}>
       
        </div>
      )}

      <div className={styles.imageSection}>
        {/* Imagen de fondo */}
        <img
          className={styles.imageBackground}
          src={backgroundImage}
          alt="Header background"
        />

        {/* 🔥 Overlay blanco animado al inicio */}
        <motion.div
          className={styles.whiteOverlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Overlay normal (oscura o con gradiente) */}
        <div className={styles.overlay}></div>

        {/* Texto animado */}
        <motion.div
          className={styles.leftContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className={styles.mainTitle}>{title}</h2>
          <h2 className={styles.subTitle}>{subtitle}</h2>
        </motion.div>
          <motion.img
          className={styles.bottomRightLogo}
          src={logo}
          alt="Panicafé Logo"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }} // Retrasa la animación del logo para que aparezca después del texto
        />
      </div>
    </header>
  );
};

export default FranchiseHeader;

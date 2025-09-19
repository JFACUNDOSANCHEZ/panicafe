import React from "react";
import styles from "./FranchiseHeader.module.css";
import logo from "../../assets/LogoPani.png";
import { motion } from "framer-motion";

const FranchiseHeader = ({
  backgroundImage,
  title,
  subtitle,
  showNav = true,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.imageSection}>
        {/* Imagen de fondo */}
        <img
          className={styles.imageBackground}
          src={backgroundImage}
          alt="Header background"
        />

        {/* Overlay blanco al inicio (animación de entrada) */}
        <motion.div
          className={styles.whiteOverlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Overlay oscuro como el del carrusel */}
        <div className={styles.overlay}></div>

        {/* Contenido centrado */}
        <div className={styles.leftContent}>
          <motion.h2
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title}
          </motion.h2>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {subtitle}
          </motion.h2>
        </div>

        {/* Logo en esquina inferior derecha */}
        <motion.img
          className={styles.bottomRightLogo}
          src={logo}
          alt="Panicafé Logo"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </header>
  );
};

export default FranchiseHeader;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Franquicias.module.css';

// Reemplaza estas rutas con las de tus imágenes
import galleryImg1 from '../../assets/F1.jpeg';
import galleryImg2 from '../../assets/F2.jpeg';
import galleryImg3 from '../../assets/F4.jpeg';
import galleryImg4 from '../../assets/F5.jpeg';
import galleryImg5 from '../../assets/F6.jpeg';
import galleryImg6 from '../../assets/F3.jpeg';

const images = [
  [galleryImg1, galleryImg2, galleryImg3],
  [galleryImg4, galleryImg5, galleryImg6],
];

const FranchiseGallery = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prevGroup) => (prevGroup + 1) % images.length);
    }, 5000); // Cambia de grupo de imágenes cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.galleryContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGroup}
          className={styles.galleryRow}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {images[currentGroup].map((imgSrc, index) => (
            <motion.div key={index} className={styles.galleryItem} variants={itemVariants}>
              <img src={imgSrc} alt={`Galería de Franquicia ${currentGroup}-${index}`} className={styles.galleryImage} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FranchiseGallery;
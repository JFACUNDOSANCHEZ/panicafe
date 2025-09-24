import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import styles from './Franquicias.module.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';
import img1 from '../../assets/F1.jpeg';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import FranchiseProcess from '../FranchiseProcess/FranchiseProcess';
import FranchiseGallery from './FranchiseGallery';
import FranchiseDetails from './FranchiseDetails';
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Franquicias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.mainWrapper}> {/* Nuevo contenedor principal */}
      <Nav />
      <ScrollToTop />
      <FranchiseHeader backgroundImage={img1} title="Franquicias" subtitle="Llevá Panicafé a tu ciudad" />

      <div className={styles.contentSections}> {/* Contenedor para las secciones */}
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
    <br /><br /><br />
          <h2 className={styles.title}>Sumate a la familia Panicafé</h2>
          <div className={styles.subTitleSeparatorLine}></div>
          <br />
          <p className={styles.text}>
            Convertite en parte de una marca en pleno crecimiento. En Panicafé te damos mucho más que una franquicia: te damos un modelo probado, un equipo que te acompaña y un producto que enamora desde el primer bocado.
          </p>
        </motion.div>
        
        <FranchiseGallery />
        <FranchiseDetails />
        <FranchiseProcess />

        <motion.div
          className={styles.ctaButtonWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a href="/contacto" className={styles.ctaButton}>
            Quiero mi franquicia
          </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Franquicias;
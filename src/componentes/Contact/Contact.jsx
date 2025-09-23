import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterestP } from 'react-icons/fa';
import styles from './Contact.module.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Contact = () => {
  useEffect(() => {
    // Al cargar el componente, desplaza la ventana a la parte superior
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <ScrollToTop /> {/* Componente para manejar el scroll */}
      
      <div className={styles.mainContent}> {/* Contenedor para el contenido principal */}
        <motion.section
          className={styles.contactSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.contactContent}>
            {/* Lado Izquierdo: Formulario */}
            <motion.div
              className={styles.formContainer}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className={styles.title}>PONTE EN CONTACTO</h2>
              <p className={styles.subtitle}>
                Estamos listos para ayudarte. Envíanos un mensaje y te responderemos
                a la brevedad.
              </p>

              <form className={styles.contactForm}>
                <input type="text" placeholder="Tu Nombre" className={styles.inputField} required />
                <input type="email" placeholder="Tu Email" className={styles.inputField} required />
                <textarea placeholder="Tu Mensaje" className={styles.textareaField} rows="6" required />
                <button type="submit" className={styles.submitButton}>
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Lado Derecho: Redes Sociales */}
            <motion.div
              className={styles.socialsContainer}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className={styles.title}>NUESTRAS REDES</h2>
              <p className={styles.subtitle}>
                Síguenos para más novedades y promociones.
              </p>
              <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className={styles.socialIcon} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={styles.socialIcon} />
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className={styles.socialIcon} />
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                  <FaPinterestP className={styles.socialIcon} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;
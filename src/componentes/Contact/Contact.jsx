import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';

const Contact = () => {
   return (
    <>
       <Nav></Nav>
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
              <i className={`fab fa-facebook-f ${styles.socialIcon}`}></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-instagram ${styles.socialIcon}`}></i>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-tiktok ${styles.socialIcon}`}></i>
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-pinterest-p ${styles.socialIcon}`}></i>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
    <Footer></Footer>
            </>
  );
};


export default Contact;

import React from 'react';
import styles from './ContactForm.module.css';

const ContactSection = () => {
  return (
<section className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        {/* Lado izquierdo: Título y frase */}
        <div className={styles.leftColumn}>
          <p className={styles.preTitle}>¿Listo para abrir tu propio</p>
          <h2 className={styles.title}>Panicafé <span className={styles.arrow}>→</span></h2>
        </div>

        {/* Lado derecho: Formulario */}
        <div className={styles.rightColumn}>
          <h3 className={styles.formTitle}>Conéctate con nosotros</h3>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Nombre completo" className={styles.inputField} required />
            <input type="email" placeholder="Correo electrónico" className={styles.inputField} required />
            <input type="tel" placeholder="Número de teléfono" className={styles.inputField} />
            <textarea placeholder="Contanos sobre tu interés en la franquicia..." className={styles.textareaField}></textarea>
            <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          </form>
        </div>
      </div>

      {/* Footer completo */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Columna de Menú (ejemplo de navegación) */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Navegación</h4>
            <ul className={styles.footerList}>
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Menú</li>
              <li>Sucursales</li>
              <li>Contacto</li>
            </ul>
          </div>

          {/* Columna de Contacto y Redes Sociales */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Contactate</h4>
            <p className={styles.contactItem}>hola@panicafe.com</p>
            <p className={styles.contactItem}>+54 9 11-3960-xxxx</p>
            <p className={styles.contactItem}>24345 Gosling Rd. Suite 120A, Spring, TX</p>
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/panicafetexas/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" className={styles.socialIcon} />
                </a>
                <a href="https://wa.me/TU_NUMERO_DE_TELEFONO" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className={styles.socialIcon} />
                </a>
                <a href="mailto:tu-correo@ejemplo.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2048px-Gmail_icon_%282020%29.svg.png" alt="Email" className={styles.socialIcon} />
                </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>© 2024 Panicafé. Todos los derechos reservados.</div>
      </footer>
    </section>
  );
};

export default ContactSection;
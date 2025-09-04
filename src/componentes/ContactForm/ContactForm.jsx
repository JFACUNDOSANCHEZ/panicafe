import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Listo para Comenzar Tu Viaje?</h2>
      <p className={styles.subtitle}>
        Completa nuestro formulario y un miembro de nuestro equipo de franquicias se pondrá en contacto contigo.
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nombre Completo</label>
          <input type="text" id="name" name="name" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Número de Teléfono</label>
          <input type="tel" id="phone" name="phone" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city" className={styles.label}>Ciudad/Estado de Interés</label>
          <input type="text" id="city" name="city" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensaje (Opcional)</label>
          <textarea id="message" name="message" className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
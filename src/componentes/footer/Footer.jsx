import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/pP3.png'; // Asegúrate de tener el logo en esta ruta

// Array de textos para el carrusel superior del footer
const carouselTexts = [
    "ENVÍOS A DOMICILIO",
    "RETIRO EN SUCURSAL",
    "PAGO SEGURO",
    "DELIVERY EN CÓRDOBA", // Ajustado para reflejar la ubicación actual
    "PEDIDOS ESPECIALES",
    "FRESCO Y ARTESANAL"
];

const Footer = () => {
    // Lógica para el carrusel de texto
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCarouselIndex(prevIndex => (prevIndex + 1) % carouselTexts.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className={styles.mainFooter}>
            
            {/* NUEVA SECCIÓN SUPERIOR: FORMULARIO Y COMENTARIO */}
           <div className={styles.footerTopSection}>
    {/* Lado izquierdo: Ahora el formulario */}
    <form className={styles.contactForm}>
        <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Tu nombre</label>
            <input type="text" id="name" className={styles.formInput} placeholder="Ingresá tu nombre" required />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Tu e-mail</label>
            <input type="email" id="email" className={styles.formInput} placeholder="Ingresá tu e-mail" required />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Tu mensaje</label>
            <textarea id="message" className={styles.formTextarea} rows="3" placeholder="Escribí tu mensaje aquí..."></textarea>
        </div>
        <button type="submit" className={styles.formButton}>Enviar</button>
    </form>

    {/* Lado derecho: Ahora el comentario */}
    <div className={styles.contactComment}>
        <h2 className={styles.contactTitle}>¿Tenés una consulta?</h2>
        <p className={styles.contactText}>
            ¡Estamos para ayudarte! Déjanos un mensaje y nos contactaremos contigo lo antes posible.
        </p>
    </div>
</div>

            {/* Carrusel de texto superior (ahora debajo del formulario) */}

            {/* Contenido principal del footer con columnas */}
            <div className={styles.footerContent}>
                {/* Columna 1: Productos */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>NUESTROS PRODUCTOS</h4>
                    <ul className={styles.footerList}>
                        <li><a href="#link">Panes</a></li>
                        <li><a href="#link">Medialunas y Facturas</a></li>
                        <li><a href="#link">Pastelería</a></li>
                        <li><a href="#link">Sándwiches y Tartas</a></li>
                        <li><a href="#link">Café y Bebidas</a></li>
                        <li><a href="#link">Promociones</a></li>
                        <li><a href="#link">Ver todos los productos</a></li>
                    </ul>
                </div>

                {/* Columna 2: Nuestras Direcciones */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>NUESTRAS DIRECCIONES</h4>
                    <ul className={styles.footerList}>
                        <li><a href="#link">Sucursal Centro</a></li>
                        <li><a href="#link">Sucursal Nueva Córdoba</a></li>
                        <li><a href="#link">Sucursal Cerro de las Rosas</a></li>
                        <li><a href="#link">Sucursal Jardín</a></li>
                        <li><a href="#link">Ver todas</a></li>
                    </ul>
                </div>

                {/* Columna 3: Contacto */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>CONTACTO</h4>
                    <ul className={styles.footerList}>
                        <li><a href="#link">Nuestra historia</a></li>
                        <li><a href="#link">Trabaja con nosotros</a></li>
                        <li><a href="#link">Preguntas Frecuentes</a></li>
                        <li><a href="#link">Contáctanos</a></li>
                    </ul>
                </div>

                {/* Columna 4: Información Útil */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>INFORMACIÓN ÚTIL</h4>
                    <ul className={styles.footerList}>
                        <li><a href="#link">Información Legal</a></li>
                        <li><a href="#link">Política de Privacidad</a></li>
                        <li><a href="#link">Términos y Condiciones</a></li>
                        <li><a href="#link">Mapa del sitio</a></li>
                    </ul>
                </div>

                {/* Columna 5: Síguenos y Email */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>SÍGUENOS</h4>
                    <div className={styles.socialIconsFooter}>
                        {/* Nuevos iconos usando Font Awesome */}
                        <a href="https://www.instagram.com/panicafetexas/" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-instagram ${styles.socialIcon}`}></i>
                        </a>
                        <a href="https://www.tiktok.com/@panicafetexas" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-tiktok ${styles.socialIcon}`}></i>
                        </a>
                        <a href="https://www.facebook.com/panicafetexas" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-facebook-f ${styles.socialIcon}`}></i>
                        </a>
                    </div>
                    <h4 className={styles.footerColumnTitle} style={{ marginTop: '20px' }}>TU E-MAIL</h4>
                    <div className={styles.emailInputContainer}>
                        <input type="email" placeholder="Ingresa tu e-mail" className={styles.footerEmailInput} />
                        <button className={styles.footerEmailSubmit}>OK</button>
                    </div>
                </div>
            </div>

            {/* Sección inferior del footer: Logo y Copyright */}
            <div className={styles.footerBottom}>
                <div className={styles.footerLogo}>
                    <img src={logo} alt="Panicafé Logo" className={styles.panicafeLogo} />
                </div>
                <p className={styles.copyrightFooter}>
                    © {new Date().getFullYear()} Panicafé – Todos los derechos reservados – Hecho con ❤️ en Córdoba
                </p>
            </div>
        </footer>
    );
};

export default Footer;
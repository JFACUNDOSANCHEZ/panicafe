import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/pP3.png'; 

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
    const location = useLocation(); // <-- Obtiene la ruta actual

    // Verifica si la ruta actual es '/contacto' (o la que uses)
    const isContactPage = location.pathname === '/contacto'|| location.pathname === '/11';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCarouselIndex(prevIndex => (prevIndex + 1) % carouselTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

   return (
        <footer className={styles.mainFooter}>
            {/* Renderización condicional: si no es la página de contacto, muestra la sección del formulario */}
            {!isContactPage && (
                <div className={styles.footerTopSection}>
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
                    <div className={styles.contactComment}>
                        <h2 className={styles.contactTitle}>¿Tenés una consulta?</h2>
                        <p className={styles.contactText}>
                            ¡Estamos para ayudarte! Déjanos un mensaje y nos contactaremos contigo lo antes posible.
                        </p>
                    </div>
                </div>
            )}

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
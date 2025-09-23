import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/pP3.png'; 

// Array de textos para el carrusel superior del footer
const carouselTexts = [
    "ENVÍOS A DOMICILIO",
    "RETIRO EN SUCURSAL",
    "PAGO SEGURO",
    "DELIVERY EN CÓRDOBA",
    "PEDIDOS ESPECIALES",
    "FRESCO Y ARTESANAL"
];

const Footer = () => {
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const location = useLocation();
    const isContactPage = location.pathname === '/contacto' || location.pathname === '/11';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCarouselIndex(prevIndex => (prevIndex + 1) % carouselTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // 👉 Manejo de WhatsApp en el footer
    const handleWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const phoneNumber = "+18326935093"; // Cambialo por tu número
        const text = `Hola, soy ${name} (${email}).%0D%0A%0D%0A${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(url, "_blank");
    };

    return (
        <footer className={styles.mainFooter}>
            {/* Si no es la página de contacto, muestra el formulario */}
            {!isContactPage && (
                <div className={styles.footerTopSection}>
                    <form className={styles.contactForm} onSubmit={handleWhatsApp}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>Tu nombre</label>
                            <input type="text" id="name" name="name" className={styles.formInput} placeholder="Ingresá tu nombre" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Tu e-mail</label>
                            <input type="email" id="email" name="email" className={styles.formInput} placeholder="Ingresá tu e-mail" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Tu mensaje</label>
                            <textarea id="message" name="message" className={styles.formTextarea} rows="3" placeholder="Escribí tu mensaje aquí..." required></textarea>
                        </div>
                        <button type="submit" className={styles.formButton}>Enviar por WhatsApp</button>
                    </form>
                    <div className={styles.contactComment}>
                        <h2 className={styles.contactTitle}>¿Tenés una consulta?</h2>
                        <p className={styles.contactText}>
                            ¡Estamos para ayudarte! Déjanos un mensaje y nos contactaremos contigo lo antes posible.
                        </p>
                    </div>
                </div>
            )}

            {/* Resto del contenido del footer */}
            <div className={styles.footerContent}>
                {/* Columna 1 */}
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

                {/* Columna 2 */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>NUESTRAS DIRECCIONES</h4>
                    <ul className={styles.footerList}>
                        <li><a href="https://www.google.com/maps/place/Esquiú+217,+Córdoba/@-31.401311,-64.167882,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a265636b0051:0xa7d19c30f4066d71!8m2!3d-31.401311!4d-64.167882!16s%2Fg%2F11b5p0w7p7?entry=ttu">Sucursal General Paz</a></li>
                        <li><a href="https://www.google.com/maps/place/H.+Yrigoyen+189,+C%C3%B3rdoba/@-31.4239869,-64.1866326,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a28b0f8e914d:0xc5c73c88e8d89e7e!8m2!3d-31.4239869!4d-64.1866326!16s%2Fg%2F11bpt1b14f?entry=ttu">Sucursal Nueva Córdoba</a></li>
                        <li><a href="https://www.google.com/maps/place/Rafael+Núñez+4385,+Córdoba/@-31.3734002,-64.2217757,17z/data=!3m1!4b1!4m6!3m5!1s0x94329e160f4e3b7b:0x597282b3d63c5576!8m2!3d-31.3734002!4d-64.2217757!16s%2Fg%2F11bz42k1f4?entry=ttu">Sucursal Cerro de las Rosas</a></li>
                        <li><a href="https://www.google.com/maps/place/Panicaf%C3%A9+Barrio+Jard%C3%ADn/@-31.4506125,-64.1818185,18z/data=!4m15!1m8!3m7!1s0x9432a2e31315d569:0x52e0523df029353f!2sMal+Paso+3292,+X5016+C%C3%B3rdoba!3b1!8m2!3d-31.4505118!4d-64.1813518!16s%2Fg%2F11y21st1qs!3m5!1s0x9432a3f76e2bb46f:0x3dd28db864109e42!8m2!3d-31.4504419!4d-64.1813503!16s%2Fg%2F11m7tqkxjj?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D">Sucursal Jardín</a></li>
                        <li><a href="/sucursales">Ver todas</a></li>
                    </ul>
                </div>

                {/* Columna 3 */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerColumnTitle}>CONTACTO</h4>
                    <ul className={styles.footerList}>
                        <li><a href="#link">Nuestra historia</a></li>
                        <li><a href="#link">Trabaja con nosotros</a></li>
                        <li><a href="#link">Contáctanos</a></li>
                    </ul>
                </div>

                {/* Columna 4 */}
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

            {/* Sección inferior */}
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

import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import styles from './Sucursales.module.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';
import img from '../../assets/F2.jpeg';
import Carousel from '../Carousel/Carousel';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import img1 from "../../assets/81.jpeg";
import img2 from "../../assets/82.jpeg";
import img3 from "../../assets/83.jpeg";
import img4 from "../../assets/87.jpeg";
import img5 from "../../assets/84.JPG";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { FaWhatsapp, FaMapMarkerAlt, FaUtensils } from "react-icons/fa"; // 👈️ Íconos importados

const Sucursales = () => {
    // Lista de sucursales con la propiedad 'menuUrl' para la carta virtual
    const sucursales = [
        {
            nombre: 'Martinolli',
            direccion: '📍Martinolli 6191',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3518547070',
            mapaUrl: `https://www.google.com/maps/place/Martín+olli+6191,+Córdoba/@-31.354029,-64.2415132,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d71e227a925:0x87d6e6a18d1f2e46!8m2!3d-31.354029!4d-64.2415132!16s%2Fg%2F11b65vgb2c?entry=ttu`,
            whatsappUrl: 'https://wa.me/5493518547070',
            menuUrl: 'https://buttercartaqr.com.ar/catalog/panicafe/neper'
        },
        {
            nombre: 'Cerro de las Rosas',
            direccion: '📍Rafael Núñez 4385',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3515489701',
            mapaUrl: `https://www.google.com/maps/place/Rafael+Núñez+4385,+Córdoba/@-31.3734002,-64.2217757,17z/data=!3m1!4b1!4m6!3m5!1s0x94329e160f4e3b7b:0x597282b3d63c5576!8m2!3d-31.3734002!4d-64.2217757!16s%2Fg%2F11bz42k1f4?entry=ttu`,
            whatsappUrl: 'https://wa.me/5493515489701',
            menuUrl: 'https://buttercartaqr.com.ar/catalog/panicafe/cerro-de-las-rosas'
        },
        {
            nombre: 'Barrio Jardín',
            direccion: '📍Mal Paso 3292',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3512525756',
            mapaUrl: `https://www.google.com/maps/place/Mal+Paso+3292,+Córdoba/@-31.4390558,-64.1837482,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a281c7f9c8f9:0x83e250c6b12a2a09!8m2!3d-31.4390558!4d-64.1837482!16s%2Fg%2F11b6574v7g?entry=ttu`,
            whatsappUrl: 'https://wa.me/5493512525756',
            menuUrl: 'https://buttercartaqr.com.ar/catalog/panicafe/barrio-jardin'
        },
        {
            nombre: 'Villa Allende',
            direccion: '📍Azcuénaga 248',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3543319524',
            mapaUrl: `https://www.google.com/maps/place/Azcuénaga+248,+Villa+Allende,+Córdoba/@-31.2917631,-64.2982823,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d40b0f4e43b:0x393c52e1f4b82d96!8m2!3d-31.2917631!4d-64.2982823!16s%2Fg%2F11gjw9n47q?entry=ttu`,
            whatsappUrl: 'https://wa.me/5493543319524',
            menuUrl: 'https://buttercartaqr.com.ar/catalog/panicafe/villa-allende'
        },
        {
            nombre: 'General Paz',
            direccion: '📍Esquiú 217',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3512265305',
            mapaUrl: `https://www.google.com/maps/place/Esquiú+217,+Córdoba/@-31.401311,-64.167882,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a265636b0051:0xa7d19c30f4066d71!8m2!3d-31.401311!4d-64.167882!16s%2Fg%2F11b5p0w7p7?entry=ttu`,
            whatsappUrl: 'https://wa.me/5493512265305',
            menuUrl: 'https://buttercartaqr.com.ar/catalog/panicafe/barrio-general-paz'
        },
        {
            nombre: 'Nueva Córdoba',
            direccion: '📍H. Yrigoyen 189',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3518044980',
            mapaUrl: `https://www.google.com/maps/place/H.+Yrigoyen+189,+Córdoba/@-31.4239869,-64.1866326,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a28b0f8e914d:0xc5c73c88e8d89e7e!8m2!3d-31.4239869!4d-64.1866326!16s%2Fg%2F11bpt1b14f?entry=ttu`,
            whatsappUrl: 'https://wa.me/5493518044980',
            menuUrl: 'https://buttercartaqr.com.ar/catalog/panicafe/buen-pastor'
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const slides = [
        { image: img4, title: "SUCURSALES", link: "/menu" },
        { image: img5, link: "/franquicias" },
        { image: img3, link: "/eeuu" },
        { image: img1, link: "/menu" },
    ];

    return (
        <>
            <Nav />
            <ScrollToTop />
            <Carousel slides={slides} />
            
            <motion.div
                className={styles.sucursalesContainer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>Encontranos cerca tuyo</h2>
                    <div className={styles.subTitleSeparatorLine}></div>
                    <p className={styles.description}>Desde el centro de Córdoba hasta las calles de Texas, hay un Panicafé esperando para compartir un momento con vos.</p>
                </div>

                <div className={styles.sucursalesGrid}>
                    {sucursales.map((sucursal, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className={styles.cardTitle}>{sucursal.nombre}</h3>
                            <p className={styles.cardInfo}>{sucursal.direccion}</p>
                            <p className={styles.cardInfo}>Horarios: {sucursal.horarios}</p>
                            <p className={styles.cardInfo}>Teléfono: {sucursal.telefono}</p>
                            <div className={styles.cardActions}>
                                {/* 👇️ Botones con íconos y texto */}
                                <a href={sucursal.menuUrl} className={styles.menuButton} aria-label="Ver Carta Virtual">
                                    <FaUtensils size={20} />
                                    <span>Carta</span>
                                </a>
                                <a href={sucursal.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton} aria-label="WhatsApp">
                                    <FaWhatsapp size={20} />
                                    <span>WhatsApp</span>
                                </a>
                                <a href={sucursal.mapaUrl} target="_blank" rel="noopener noreferrer" className={styles.howToGetButton} aria-label="Cómo llegar">
                                    <FaMapMarkerAlt size={20} />
                                    <span>Cómo llegar</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.usaButtonWrapper}>
                    <a href="/eeuu" className={styles.usaButton}>
                        Ver Panicafé en EE.UU
                    </a>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Sucursales;
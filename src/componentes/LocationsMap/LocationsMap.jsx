import React, { useEffect } from "react"; 
import 'leaflet/dist/leaflet.css';
import styles from './LocationsMap.module.css';
import Footer from '../footer/Footer';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

import InvitationSection from '../InvitationSection/InvitationSection';
import porta from '../../assets/gale/6.jpg';
import porta2 from '../../assets/gale/1.jpg';
import Gallery from '../gallery/Gallery.jsx';
import Nav from '../Nav/Nav';

const LocationsMap = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const locations = [
        {
            name: "PANICAFÉ Spring",
            address: "24345 Gosling Rd. Suite 120A, Spring, TX",
        },
        {
            name: "PANICAFÉ TEA ROOM",
            address: "30420 FM2978, Suite 160, The Woodlands, TX",
        },
        {
            name: "PANICAFÉ Montgomery",
            address: "859 Pine Market Ave Suite 200, Montgomery, TX",
        },
    ];

    return (
        <div className={styles.container}>
            <Nav />
            <FranchiseHeader
                backgroundImage={porta2}
                title="PANICAFÉ EN EE.UU."
                subtitle="El sabor argentino que conquistó Texas"
            />

            {/* Intro con imagen */}
            <section className={styles.section}>
                <div className={styles.row}>
                    {/* Imagen izquierda */}
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img src={porta} alt="Panicafé en Texas" className={styles.image} />
                    </motion.div>

                    {/* Texto derecha */}
                    <motion.div
                        className={styles.textWrapper}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className={styles.title}>PANICAFÉ EN EE.UU.</h2>
                        <p className={styles.text}>
                            En 2023, Panicafé cruzó fronteras para conquistar nuevos paladares.
                            Hoy, tres sucursales en Texas comparten nuestra pasión por el café
                            y la pastelería artesanal, manteniendo intacta la esencia que nos vio nacer en Argentina.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Línea separadora */}
            {/* <motion.div
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            /> */}
{/* NUEVA sección: Lista a la izquierda - imagen a la derecha */}
<section className={styles.section}>
    <div className={styles.row}>
        {/* Lista de Sucursales (izquierda) */}
        <motion.div
            className={styles.textWrapper}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className={styles.title}>SUCURSALES EN TEXAS</h2>
            {locations.map((location, index) => (
                <div key={index} className={styles.locationItem}>
                    <h3 className={styles.locationName}>{location.name}</h3>
                    <p className={styles.locationAddress}>{location.address}</p>
                </div>
            ))}
        </motion.div>

        {/* Imagen Mapa (derecha) */}
        <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <img src={porta2} alt="Mapa de sucursales de Panicafé" className={styles.image} />
        </motion.div>
    </div>
</section>
            {/* Línea separadora */}
            <motion.div
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            />

            <InvitationSection />

            <motion.div
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            />

            <Gallery />
            <br /><br /><br /><br />
            <Footer />
        </div>
    );
};

export default LocationsMap;

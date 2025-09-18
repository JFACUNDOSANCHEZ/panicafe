import React from 'react';
import 'leaflet/dist/leaflet.css'; 
import styles from './LocationsMap.module.css';
import Footer from '../footer/Footer';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import { motion } from 'framer-motion';
import InvitationSection from '../InvitationSection/InvitationSection';
import porta from '../../assets/gale/6.jpg';
import porta2 from '../../assets/gale/1.jpg';
import Gallery from '../gallery/Gallery.jsx';
import Nav from '../Nav/Nav';

const LocationsMap = () => {
    const locations = [
        {
            name: "PANICAFÉ Spring",
            address: "24345 Gosling Rd. Suite 120A, Spring, TX",
            position: [30.1065, -95.5562],
        },
        {
            name: "PANICAFÉ TEA ROOM",
            address: "30420 FM2978, Suite 160, The Woodlands, TX",
            position: [30.1663, -95.6148],
        },
        {
            name: "PANICAFÉ Montgomery",
            address: "859 Pine Market Ave Suite 200, Montgomery, TX",
            position: [30.4079, -95.6322],
        },
    ];

    return (
        <div className={styles.container}>
            <Nav></Nav>
            <FranchiseHeader 
                backgroundImage="https://images.pexels.com/photos/30918887/pexels-photo-30918887.jpeg"
                title="PANICAFÉ EN EE.UU"
                subtitle="Llevando el sabor argentino a Texas"
            />

            {/* Sección Intro */}
            <motion.div 
                className={styles.introSection}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div 
                    className={styles.introImageContainer}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img
                        src={porta}
                        alt="Panicafé en Texas"
                        className={styles.introImage}
                    />
                </motion.div>
                <motion.div 
                    className={styles.introTextContent}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className={styles.mainTitle}>PANICAFÉ EN EE.UU</h2>
                    <h2 className={styles.subTitle}>Llevando el sabor argentino a Texas</h2>
                    <div className={styles.subTitleSeparatorLine}></div> 
                    <div className={styles.spacer}></div>
                    <p className={styles.introText}>
                        En 2023, Panicafé cruzó fronteras para conquistar nuevos paladares. Hoy, tres sucursales en Texas comparten nuestra pasión por el café y la pastelería artesanal, manteniendo intacta la esencia que nos vio nacer en Argentina.
                    </p>
                </motion.div>   
            </motion.div>


       

            {/* Mapa + Ubicaciones */}

                  <motion.div 
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
            <div className={styles.contentWrapper}>
                {/* Imagen tipo mapa */}

                {/* Lista de Sucursales */}
                <motion.div 
                    className={styles.locationsColumn}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className={styles.locationsSubtitle}>SUCURSALES TEXAS:</h2>
                    <div className={styles.locationsList}>
                        {locations.map((location, index) => (
                            <motion.div 
                            key={index} 
                            className={styles.locationItem}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 * index }}
                            viewport={{ once: true, amount: 0.3 }}
                            >
                                <h3 className={styles.locationName}>{location.name}</h3>
                                <p className={styles.locationAddress}>{location.address}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div 
                    className={styles.mapWrapper}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img
                        src={porta2}
                        alt="Mapa de Panicafé en Texas"
                        className={styles.gifImage}
                    />
                </motion.div>
            </div>

            {/* Línea separadora final */}
            <motion.div 
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
                        <InvitationSection />
                        <motion.div 
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>

            <Gallery />
            <br /><br /><br /><br />
            <Footer />
        </div>
    );
};

export default LocationsMap;

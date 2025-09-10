import React, { useEffect, useRef } from 'react';
// ELIMINAMOS las importaciones de Leaflet que ya no se usarán
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
// import L from 'leaflet';
import styles from './LocationsMap.module.css';
import Footer from '../footer/Footer';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import InvitationSection from '../InvitationSection/InvitationSection';

// ELIMINAMOS el fix para marcadores de Leaflet que ya no se usarán
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//     iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//     shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// ELIMINAMOS el componente MapInvalidator que ya no se usará
// const MapInvalidator = () => {
//     const map = useMapEvents({});
//     useEffect(() => {
//         map.invalidateSize();
//     }, [map]);
//     return null;
// };

const LocationsMap = () => {
    // Estas ubicaciones ahora solo se usarán para la columna de texto, no para el mapa
    const locations = [
        {
            name: "PANICAFÉ Spring",
            address: "24345 Gosling Rd. Suite 120A, Spring, TX",
            position: [30.1065, -95.5562], // Estas coordenadas ya no se usarán para un mapa interactivo
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

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimationControls();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                staggerChildren: 0.15,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            } 
        },
    };

    return (
        <div className={styles.container}>
            <FranchiseHeader />

            <motion.div 
                className={styles.introSection}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className={styles.introImageContainer}
                    variants={itemVariants}
                >
                    <img
                        src="https://www.woodlandsonline.com/images/newsimage/80467/Panicafe_1.jpg"
                        alt="Panicafé en Texas"
                        className={styles.introImage}
                    />
                </motion.div>
                <motion.div 
                    className={styles.introTextContent}
                    variants={itemVariants}
                >
                    <h2 className={styles.mainTitle}>PANICAFÉ EN EE.UU</h2>
                    <h2 className={styles.subTitle}>Llevando el sabor argentino a Texas</h2>
                    {/* *** AQUÍ AGREGAMOS LA LÍNEA SEPARADORA *** */}
                    <div className={styles.subTitleSeparatorLine}></div> 
                    {/* **************************************** */}
                    <div className={styles.spacer}></div>
                    <p className={styles.introText}>
                        En 2023, Panicafé cruzó fronteras para conquistar nuevos paladares. Hoy, tres sucursales en Texas comparten nuestra pasión por el café y la pastelería artesanal, manteniendo intacta la esencia que nos vio nacer en Argentina.
                    </p>
                </motion.div>   
            </motion.div>
            <InvitationSection />
            <motion.div 
                className={styles.separatorLine}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            ></motion.div>

            <div className={styles.contentWrapper} ref={ref}>
                {/* AHORA SERÁ UNA IMAGEN GIF EN LUGAR DEL MAPA */}
                <motion.div 
                    className={styles.mapWrapper} // Reutilizamos este wrapper para la imagen
                    variants={itemVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <img
                        src="https://luciapageph.com.ar/wp-content/uploads/2024/10/Panicafe-1.gif" // ¡Aquí está tu GIF!
                        alt="Mapa de Panicafé en Texas" // Texto alternativo descriptivo
                        className={styles.gifImage} // Nueva clase CSS para estilizar el GIF
                    />
                </motion.div>

                {/* UBICACIONES A LA DERECHA */}
                <motion.div 
                    className={styles.locationsColumn}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2 
                        className={styles.locationsSubtitle}
                        variants={itemVariants}
                    >
                      <h2>
                         SUCURSALES TEXAS:
                        </h2> 
                    </motion.h2>
                    <div className={styles.locationsList}>
                        {locations.map((location, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.locationItem}
                                variants={itemVariants}
                            >
                                <h3 className={styles.locationName}>{location.name}</h3>
                                <p className={styles.locationAddress}>{location.address}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default LocationsMap;
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import styles from './InvitationSection.module.css';

// Ahora solo 4 imágenes de ejemplo
import instaImage1 from '../../assets/1.jpeg'; // Asegúrate de que estas rutas sean correctas
import instaImage2 from '../../assets/2.jpeg';
import instaImage3 from '../../assets/3.jpeg';
import instaImage4 from '../../assets/4.jpeg';


const InvitationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
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
                stiffness: 70,
                damping: 18,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 80, damping: 20 }
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 80, damping: 20 }
        },
    };

    return (
        <motion.div
            ref={ref}
            className={styles.invitationContainer}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {/* Lado izquierdo: Síguenos y Hoja Informativa (AHORA PRIMERO Y FONDO BLANCO) */}
            <div className={styles.contentLeftInfo}> {/* CLASE AJUSTADA */}
                <motion.div className={styles.followUsSection} variants={textVariants}>
                    <h2 className={styles.followUsTitle}>SEGUINOS</h2>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/panicafetexas" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-facebook-f ${styles.socialIcon}`}></i>
                        </a>
                        <a href="https://www.instagram.com/panicafetexas/" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-instagram ${styles.socialIcon}`}></i>
                        </a>
                        <a href="https://www.tiktok.com/@panicafetexas" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-tiktok ${styles.socialIcon}`}></i>
                        </a>
                    </div>
                </motion.div>

                <div className={styles.separatorLineSolid}></div>

                <motion.div className={styles.newsletterSection} variants={textVariants}>
                    <h2 className={styles.newsletterTitle}>HOJA INFORMATIVA</h2>
                    <p className={styles.newsletterSubtitle}>
                        ¡Para que no te pierdas nada!
                        Recibe nuestras nuevas recetas exclusivas, grandes ofertas y todas las novedades sobre Panicafé,
                        ¡directamente en tu buzón!
                    </p>
                    {/* <div className={styles.emailForm}>
                        <input type="email" placeholder="CORREO ELECTRÓNICO" className={styles.newsletterInput} />
                        <button className={styles.newsletterButton}>DE ACUERDO</button>
                    </div> */}
                </motion.div>
            </div>

            {/* Lado derecho: Cuadrícula de Instagram (AHORA SEGUNDO) */}
            <div className={styles.contentRightImages}> {/* CLASE AJUSTADA */}
                <motion.h2 className={styles.instagramTitle} variants={textVariants}>
                    INSTAGRAM @PANICAFECORDOBA
                </motion.h2>
                <div className={styles.instagramGrid}>
                    <motion.img src={instaImage1} alt="Instagram Post 1" className={styles.gridImage} variants={imageVariants} />
                    <motion.img src={instaImage2} alt="Instagram Post 2" className={styles.gridImage} variants={imageVariants} />
                    <motion.img src={instaImage3} alt="Instagram Post 3" className={styles.gridImage} variants={imageVariants} />
                    <motion.img src={instaImage4} alt="Instagram Post 4" className={styles.gridImage} variants={imageVariants} />
                </div>
            </div>
        </motion.div>
    );
};

export default InvitationSection;
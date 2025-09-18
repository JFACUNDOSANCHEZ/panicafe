import React from 'react';
import { motion } from 'framer-motion';
import styles from './InvitationSection.module.css';

import instaImage1 from '../../assets/1.jpeg'; 
import instaImage2 from '../../assets/2.jpeg';
import instaImage3 from '../../assets/3.jpeg';
import instaImage4 from '../../assets/4.jpeg';

const InvitationSection = () => {
    return (
        <section className={styles.invitationContainer}>
            {/* Imágenes a la izquierda */}
            <div className={styles.contentImages}>
                <motion.h2 
                    className={styles.instagramTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    INSTAGRAM @PANICAFETEXAS 
                </motion.h2>
                <div className={styles.instagramGrid}>
                    <motion.img 
                        src={instaImage1} 
                        alt="Instagram Post 1" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.img 
                        src={instaImage2} 
                        alt="Instagram Post 2" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.img 
                        src={instaImage3} 
                        alt="Instagram Post 3" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.img 
                        src={instaImage4} 
                        alt="Instagram Post 4" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                </div>
            </div>

            {/* Texto a la derecha */}
            <div className={styles.contentText}>
                <motion.div 
                    className={styles.followUsSection} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
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

                <motion.div 
                    className={styles.newsletterSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className={styles.newsletterSubtitle}>
                        ¡Para que no te pierdas nada!
                        Recibe nuestras nuevas recetas exclusivas, grandes ofertas y todas las novedades sobre Panicafé,
                        ¡directamente en tu buzón!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default InvitationSection;

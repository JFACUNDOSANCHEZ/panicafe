import React from 'react';
import { motion } from 'framer-motion';
import styles from './InvitationSection.module.css';

import instaImage1 from '../../assets/31.jpeg'; 
import instaImage2 from '../../assets/32.jpeg';
import instaImage3 from '../../assets/33.jpeg';
import instaImage4 from '../../assets/34.jpeg';

const InvitationSection = () => {
    return (
        <section className={styles.invitationContainer}>
            {/* Imagens à esquerda com animação de entrada lateral */}
            <motion.div 
                className={styles.contentImages}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2 
                    className={styles.instagramTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <a 
                        href="https://www.instagram.com/panicafetexas/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        INSTAGRAM @PANICAFETEXAS
                    </a>
                </motion.h2>
                <div className={styles.instagramGrid}>
                    <motion.img 
                        src={instaImage1} 
                        alt="Instagram Post 1" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.img 
                        src={instaImage2} 
                        alt="Instagram Post 2" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.img 
                        src={instaImage3} 
                        alt="Instagram Post 3" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.img 
                        src={instaImage4} 
                        alt="Instagram Post 4" 
                        className={styles.gridImage} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                </div>
            </motion.div>

            {/* Texto à direita com animação de entrada lateral */}
            <motion.div 
                className={styles.contentText}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div 
                    className={styles.followUsSection} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className={styles.followUsTitle}>Seguinos</h2>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/panicafetexas" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-facebook-f ${styles.socialIcon}`}></i>
                        </a>
                        <a href="https://www.instagram.com/panicafetexas/" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-instagram ${styles.socialIcon}`}></i>
                        </a>
                        <a href="mailto:info@panicafe.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </motion.div>

                {/* <div className={styles.separatorLineSolid}></div> */}

                <motion.div 
                    className={styles.newsletterSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className={styles.newsletterSubtitle}>
                        ¡Para que no te pierdas nada!
                        Recibe nuestras nuevas recetas exclusivas, grandes ofertas y todas las últimas noticias sobre Panicafé directamente en tu mano.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default InvitationSection;
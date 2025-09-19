import { motion } from 'framer-motion';
import styles from './Sucursales.module.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';
import img from '../../assets/f2.jpeg';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
const Sucursales = () => {
    const sucursales = [
        {
            nombre: 'Cerro de las Rosas',
            direccion: '📍Rafael Núñez 4385',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3515489701',
            mapaUrl: 'https://maps.app.goo.gl/TUH2oT81iFjYfFjT7',
            whatsappUrl: 'https://wa.me/5493515489701'
        },
        {
            nombre: 'Barrio Jardín',
            direccion: '📍Mal Paso 3292',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3512525756',
            mapaUrl: 'https://maps.app.goo.gl/Qc2kFhC6Vf1zW2K1A',
            whatsappUrl: 'https://wa.me/5493512525756'
        },
        {
            nombre: 'Villa Allende',
            direccion: '📍Azcuénaga 248',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3543319524',
            mapaUrl: 'https://maps.app.goo.gl/qL8Z8tY2jH6S2R2c6',
            whatsappUrl: 'https://wa.me/5493543319524'
        },
        {
            nombre: 'General Paz',
            direccion: '📍Esquiú 217',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3512265305',
            mapaUrl: 'https://maps.app.goo.gl/k3HwT7R1c2N1jH5E7',
            whatsappUrl: 'https://wa.me/5493512265305'
        },
        {
            nombre: 'Nueva Córdoba',
            direccion: '📍H. Yrigoyen 189',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3518044980',
            mapaUrl: 'https://maps.app.goo.gl/R5wX3T6r8s5f7b4c6',
            whatsappUrl: 'https://wa.me/5493518044980'
        },
        {
            nombre: 'Martinolli',
            direccion: '📍Martinolli 6191',
            horarios: 'Lunes a Domingo: 8:00 - 21:00',
            telefono: '+54 9 3518547070',
            mapaUrl: 'https://maps.app.goo.gl/P2xV5z1e4r7y9u0o7',
            whatsappUrl: 'https://wa.me/5493518547070'
        },
    ];

    return (
        <>
        <Nav></Nav>
        <FranchiseHeader 
                backgroundImage={img}
                title="NUESTRAS SUCURSALES"
                subtitle="Encontranos cerca tuyo"
            />
        
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
                            <a href={sucursal.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                                WhatsApp
                            </a>
                            <a href={sucursal.mapaUrl} target="_blank" rel="noopener noreferrer" className={styles.howToGetButton}>
                                Cómo llegar
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className={styles.usaButtonWrapper}>
                <a href="/panicafe-usa" className={styles.usaButton}>
                    Ver Panicafé en EE.UU
                </a>
            </div>
        </motion.div>
        <Footer></Footer>
                </>
    );
};

export default Sucursales;
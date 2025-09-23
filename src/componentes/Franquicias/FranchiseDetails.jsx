import React from 'react';
import { motion } from 'framer-motion';
import styles from './Franquicias.module.css';
import logo from '../../assets/LogoPanicafe.png';
import franchiseImage from '../../assets/83.jpeg';
import bottomImage from '../../assets/F2.jpeg'; 

const FranchiseDetails = () => {
return (
<div className={styles.detailsContainer}>

{/* Sección Introductoria con Imagen y Texto */}
<motion.div
className={styles.introSection}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true, amount: 0.3 }}
>
<div className={styles.introImageContainer}>
<img src={franchiseImage} alt="Oficina de Franquicias Panicafé" className={styles.introImage} />
</div>

<div className={styles.introTextContent}>
<h2 className={styles.mainTitle}>Expande tu negocio con Panicafé</h2>
<div className={styles.subTitleSeparatorLine}></div>
<p className={styles.introText}>
Panicafé presta servicios de asistencia para la apertura y operación de restaurantes mediante franquicias,
ofreciendo un modelo de negocio probado y un soporte integral para asegurar el éxito.
</p>
<div className={styles.spacer}></div>
</div>
</motion.div>

{/* Sección del separador */}
<motion.hr className={styles.separatorLine}
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 1 }}
viewport={{ once: true, amount: 0.3 }}
/>

{/* Sección de Territorios y Contacto */}
<motion.div
className={styles.contentWrapper}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true, amount: 0.3 }}
>
<div className={styles.locationsColumn}>
<h2 className={styles.locationsSubtitle}>TERRITORIOS Y CONTACTOS</h2>
<ul className={styles.locationsList}>
{/* Contacto para USA */}
<li>
<h3 className={styles.locationName}>USA</h3>
<p className={styles.locationDetail}>
{/* Contacto Local: <span className={styles.contactName}>John Doe</span><br /> */}
Tel: <a href="tel:+15551234567" className={styles.contactLink}>+1 (832) 693-5093</a><br />
Email: <a href="mailto:usa@panicafe.com" className={styles.contactLink}>Panicafemanager@gmail.com</a>
</p>
</li>
{/* Contacto para LATAM */}
<li>
<h3 className={styles.locationName}>LATAM</h3>
<p className={styles.locationDetail}>
{/* Contacto Regional: <span className={styles.contactName}>Ana Pérez</span><br /> */}
Tel: <a href="tel:+5493518765432" className={styles.contactLink}>+1 (832) 693-5093</a><br />
Email: <a href="mailto:latam@panicafe.com" className={styles.contactLink}>Panicafemanager@gmail.com</a>
</p>
</li>
{/* Contacto para Europa */}
<li>
{/* <h3 className={styles.locationName}>Europa</h3>
<p className={styles.locationDetail}>
Contacto: <span className={styles.contactName}>Isabella García</span><br />
Tel: <a href="tel:+34915558877" className={styles.contactLink}>(91) 555-8877</a><br />
Email: <a href="mailto:europe@panicafe.com" className={styles.contactLink}>europe@panicafe.com</a>
</p> */}
</li>
</ul>
</div>

{/* Nuevo contenedor para la imagen y los enlaces de descarga */}
<div className={styles.downloadsAndImage}>
<h3 className={styles.downloadsSubtitle}>Material Descargable</h3>
<div className={styles.downloadLinks}>
<a href="/docs/guia-franquiciado.pdf" className={styles.downloadLink} download>
Guía del franquiciado 📥
</a>
<a href="/docs/brochure-institucional.pdf" className={styles.downloadLink} download>
Brochure institucional 📥
</a>
</div>
<div className={styles.bottomImageContainer}>
{/* <img src={bottomImage} alt="Nuestra Cafetería" className={styles.bottomImage} /> */}
</div>
</div>
</motion.div>
</div>
);
};

export default FranchiseDetails;
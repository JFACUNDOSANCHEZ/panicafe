import React, { useEffect } from "react";
import styles from "./QuienesSomos.module.css";
import img1 from "../../assets/q1.jpeg"; 
import img2 from "../../assets/q2.jpeg";
import img3 from "../../assets/q3.jpeg";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";

import Footer from "../footer/Footer";
import FranchiseHeader from "../FranchiseHeader/FranchiseHeader";
const QuienesSomos = () => {
 const data = [
    {
      image: img1,
      title: "NUESTRA ESENCIA",
      text: "Nacimos en Córdoba con un sueño simple: ofrecer un café que invite a quedarse y sabores que se conviertan en recuerdos. Con el tiempo, Panicafé se transformó en mucho más que una cafetería: somos un punto de encuentro, un ritual diario y una experiencia para todos los sentidos..",
    },
    {
      image: img2,
      title: "NUESTRA TRADICIÓN",
      text: "Creemos en la calidad desde el origen. Seleccionamos cuidadosamente nuestros granos, elaboramos cada producto con ingredientes frescos y diseñamos espacios que combinan calidez y estilo. Hoy contamos con sucursales en diferentes puntos de  Córdoba Capital y en Texas, llevando un pedacito de nuestra esencia a cada rincón donde abrimos nuestras puertas..",
    },
    {
      image: img3,
      title: "NUESTRA PASIÓN",
      text: "Hoy contamos con sucursales en diferentes puntos de  Córdoba Capital y en Texas, llevando un pedacito de nuestra esencia a cada rincón donde abrimos nuestras puertas..",
    },
  ];
useEffect(() => {
    // Al cargar el componente, desplaza la ventana a la parte superior
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>
<Nav></Nav>
<FranchiseHeader backgroundImage={img3} title="QUIÉNES SOMOS" subtitle="Una historia que se sirve en cada taza" />
        <section className={styles.section}>
{data.map((item, index) => (
  <div
    key={index}
    className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ""}`}
  >
    <motion.div
      className={styles.imageWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src={item.image} alt={item.title} className={styles.image} />
    </motion.div>

 <motion.div
  className={styles.textWrapper}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className={styles.title}>{item.title}</h2>
  {/* <p className={styles.subTitle}>VALUES AND COMMITMENTS</p> */}
  <p className={styles.text}>{item.text}</p>
</motion.div>
  </div>
))}


    </section>
    <Footer></Footer>
    </div>
  );
};

export default QuienesSomos;

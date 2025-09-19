import React from "react";
import styles from "./Home.module.css";
import img1 from "../../assets/F7.jpeg";
import img2 from "../../assets/F8.jpeg";
import img3 from "../../assets/F6.jpeg";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Franquicias",
    text: "Lleva la esencia y el éxito de Panicafé a tu propia ciudad. Con un modelo de negocio probado y un fuerte soporte de marca, te ofrecemos la oportunidad de unirte a nuestra familia y compartir la pasión por el café y la panadería artesanal. Te acompañamos en cada paso para que tu negocio sea un éxito.",
    image: img1,
    reverse: false,
  },
  {
    title: "Sucursales",
    text: "Encuentra tu rincón favorito de Panicafé. Con sucursales estratégicamente ubicadas, estamos siempre cerca de ti para ofrecerte una experiencia inolvidable. Visita nuestros espacios acogedores, diseñados para que te sientas como en casa, ya sea para un café rápido o para una larga charla con amigos.",
    image: img2,
    reverse: true,
  },
  {
    title: "Panicafé en EE.UU",
    text: "El auténtico sabor argentino que conquistó Texas. Estamos orgullosos de haber llevado nuestra tradición y calidad más allá de las fronteras. En nuestras sucursales de EE.UU., cada taza de café y cada bocado de pan cuenta la historia de nuestro origen, uniendo culturas a través de la pasión por los sabores genuinos.",
    image: img3,
    reverse: false,
  },
];

const Home = () => {
  return (
    <section className={styles.section}>
      {highlights.map((item, index) => (
        <div
          key={index}
          className={`${styles.row} ${item.reverse ? styles.reverse : ""}`}
        >
          {/* Imagen */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: item.reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={item.image} alt={item.title} className={styles.image} />
          </motion.div>

          {/* Texto */}
          <motion.div
            className={styles.textWrapper}
            initial={{ opacity: 0, x: item.reverse ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.text}>{item.text}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Home;
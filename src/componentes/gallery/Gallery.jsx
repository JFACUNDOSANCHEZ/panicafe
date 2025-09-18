import React, { useRef } from "react";
import styles from "./Gallery.module.css";
import img1 from "../../assets/gale/1.jpg";
import img2 from "../../assets/gale/2.jpg";
import img3 from "../../assets/gale/3.jpg";
import img4 from "../../assets/gale/4.jpg";
import img5 from "../../assets/gale/5.jpg";
import { motion, useInView } from "framer-motion";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // La animación se dispara una sola vez

  const products = [
    { src: img1, title: "OUTDOOR" },
    { src: img2, title: "PET FRIENDLY" },
    { src: img3, title: "TAKE AWAY" },
    { src: img4, title: "APPLE PIE" },
    { src: img5, title: "GRANOLA" },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.left}>
        <h2 className={styles.title}>VISITA NUESTRAS WEB</h2>
        <div className={styles.buttons}>
          <a
            href="https://www.panicafetx.com/franchise/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            SEE PANICA
          </a>
          <a
            href="https://lamadeleine.com/franchise"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            SEE LA MADELEINE
          </a>
        </div>
      </div>

      <div className={styles.right}>
        {products.map((p, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <img src={p.src} alt={p.title} className={styles.image} />
            <p className={styles.caption}>{p.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
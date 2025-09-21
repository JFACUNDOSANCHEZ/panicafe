import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Gallery.module.css";
import img1 from "../../assets/gale/1.jpg";
import img2 from "../../assets/gale/2.jpg";
import img3 from "../../assets/gale/3.jpg";
import img4 from "../../assets/gale/4.jpg";
import img5 from "../../assets/gale/5.jpg";

const products = [
  { src: img1, title: "" },
  { src: img2, title: "" },
  { src: img3, title: "" },
  { src: img4, title: "" },
  { src: img5, title: "" },
];

const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.title}>VISITA NUESTRAS WEB</h2>
        <div className={styles.buttons}>
          <a
            href="https://www.panicafetx.com/franchise/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            SEE PANICAFE
          </a>
         
        </div>
      </div>

      <div className={styles.right}>
        <Swiper
          className={styles.swiperContainer}
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className={styles.slideContent}>
                <img src={p.src} alt={p.title} className={styles.image} />
                <p className={styles.caption}>{p.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
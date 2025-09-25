import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";

export default function Carousel({ slides }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Esto fuerza a Swiper a recalcular el ancho después de montarse
    setTimeout(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.update();
      }
    }, 100);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      {/* Efecto blanco al cargar */}
      <motion.div
        className={styles.whiteOverlay}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className={styles.carousel}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.overlay}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.button && (
                  <a href={slide.link}>
                    <button>{slide.button}</button>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

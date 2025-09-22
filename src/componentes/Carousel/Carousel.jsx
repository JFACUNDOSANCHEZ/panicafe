// Carousel.jsx
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
              <a href={slide.link}>
                {slide.button ? <button>{slide.button}</button> : null}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

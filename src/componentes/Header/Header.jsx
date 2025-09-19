import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Nav from "../Nav/Nav";

import "swiper/css";
import "swiper/css/pagination";
import Footer from "../Footer/Footer";
import styles from "./Header.module.css";
import Producto from "../producto/Producto";
import img1 from "../../assets/F7.jpeg";
import img2 from "../../assets/F8.jpeg";
import img3 from "../../assets/F6.jpeg";

// Importa el nuevo componente Home
import Home from "../Home/Home"; // Este es el nuevo componente que creamos

// Tus slides
const slides = [
    {
    image: img2,
  title: "Invertí en tu futuro",
    description:
      "Descubrí una oportunidad de negocio exitosa con Panicafé.",
    button: "Más información",
    link: "/franquicias",
  },
 {
    image: img3,
    title: "Sabor que cruza fronteras",
    description: "Ahora también en EE.UU.",
    button: "Ver más",
    link: "/eeuu",
  },  {
    image: img1,
    title: "Descubre nuestra variedad",
    description: "Encuentra productos únicos para todos los gustos",
    button: "Ver Carta",
    link: "/menu",
  },

 
];

export default function Header() {
  return (
    <>
     <Nav /> 
      {/* Carrusel */}
      <Swiper
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
                  <button>{slide.button}</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
<Producto></Producto>
      {/* Nuevo componente debajo del carrusel */}
      <Home />
<Footer></Footer>
    </>
  );
}

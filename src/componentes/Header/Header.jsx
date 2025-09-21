// Header.jsx
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";
import styles from "./Header.module.css";
import Producto from "../producto/Producto";
import img1 from "../../assets/F7.jpeg";
import img2 from "../../assets/F8.jpeg";
import img3 from "../../assets/F6.jpeg";
import Home from "../Home/Home";
import Carousel from "../Carousel/Carousel"; // Importa el nuevo componente

const slides = [
  {
    image: img2,
    title: "Invertí en tu futuro",
    description: "Descubrí una oportunidad de negocio exitosa con Panicafé.",
    button: "Más información",
    link: "/franquicias",
  },
  {
    image: img3,
    title: "Sabor que cruza fronteras",
    description: "Ahora también en EE.UU.",
    button: "Ver más",
    link: "/eeuu",
  },
  {
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
      <div className={styles.mainContainer}>
        <Carousel slides={slides} /> 
        <Producto></Producto>
        <Home />
      </div>
      <Footer></Footer>
    </>
  );
}
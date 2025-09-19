import React from "react";
import styles from "./Producto.module.css";
import img from "../../assets/2.jpeg";
import img2 from "../../assets/F5.jpeg";
import img4 from "../../assets/f12.jpeg";
import img3 from "../../assets/f11.jpeg";
import { useEffect } from "react";

// Datos de ejemplo (puedes reemplazar con props o data desde API)
const products = [
  { id: 1, name: "CURRENT RYE BREAD", price: "5,40€", image: img, soldOut: true },
  { id: 2, name: "GRANOLA", image: img2, soldOut: true },
  { id: 3, name: "BRIOCHE",  image: img3, soldOut: true },
  { id: 4, name: "CHOCOLATE-FILLED BISCUIT BARS", price: "FROM 11,90€", image: img4, soldOut: true },
];

const Producto = () => {
    useEffect(() => {
    // Al cargar el componente, desplaza la ventana a la parte superior
    window.scrollTo(0, 0);
  }, []); //
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>FUERA DEL HORNO</h2>
        <a href="#" className={styles.seeAll}>Ver mas</a>
      </div>

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.name} className={styles.image} />
              {/* {product.soldOut && <span className={styles.soldOut}>SOLD OUT</span>} */}
            </div>
            <h3 className={styles.productName}>{product.name}</h3>
            {/* <p className={styles.price}>{product.price}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Producto;

import React from "react";
import styles from "./Producto.module.css";

// Datos de ejemplo (puedes reemplazar con props o data desde API)
const products = [
  { id: 1, name: "CURRENT RYE BREAD", price: "5,40€", image: "https://luciapageph.com.ar/wp-content/uploads/2024/11/Panicafe-427-1.jpg", soldOut: true },
  { id: 2, name: "GRANOLA", price: "FROM 2,70€", image: "https://www.pinchmeimeating.com/wp-content/uploads/2017/07/Brie-prosciutto-fig-sandwich-2-1.jpg", soldOut: true },
  { id: 3, name: "BRIOCHE", price: "FROM 5,50€", image: "https://www.varimedobre.eu/wp-content/uploads/2021/11/DSC5723.jpg", soldOut: true },
  { id: 4, name: "CHOCOLATE-FILLED BISCUIT BARS", price: "FROM 11,90€", image: "https://www.whatshouldimakefor.com/wp-content/uploads/2016/02/Waldorf-Chicken-Salad-4.jpg", soldOut: true },
];

const Producto = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>OUT OF THE OVEN</h2>
        <a href="#" className={styles.seeAll}>SEE ALL</a>
      </div>

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.name} className={styles.image} />
              {/* {product.soldOut && <span className={styles.soldOut}>SOLD OUT</span>} */}
            </div>
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Producto;

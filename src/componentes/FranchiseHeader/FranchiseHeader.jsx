import React from 'react';
import styles from './FranchiseHeader.module.css';
import Nav from '../Nav/Nav'; // <-- Importa Nav aquí

const FranchiseHeader = () => {
  return (
    <header className={styles.header}>
      {/* Coloca el Nav aquí, al principio del header */}
      <Nav /> 
      
      {/* El div 'content' necesita un padding-top para que su contenido no quede debajo del nav */}
      <div className={styles.content}> 
        <h1 className={styles.title}>
          Tu Sueño Americano Hecho Café
        </h1>
        <br /><br /><br />
        {/* <button className={styles.ctaButton}>
          Solicita Información Ahora
        </button> */}
      </div>
    </header>
  );
};

export default FranchiseHeader;
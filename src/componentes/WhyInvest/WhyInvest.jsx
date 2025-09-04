import React from 'react';
import styles from './WhyInvest.module.css';

const WhyInvest = () => {
  const benefits = [
    { title: 'Mercado en Auge', description: 'El Consumo de Café en EE. UU. Sigue en Auge: Inversión en un Mercado Resiliente y Lucrativo.' },
    { title: 'Modelo Probado', description: 'Rentabilidad Comprobada y Eficiencia Operativa: Nuestro Sistema Está Diseñado para el Éxito.' },
    { title: 'Soporte Integral', description: 'Desde la Selección del Local hasta el Marketing: Recibe Guía Experta en Cada Paso.' },
    { title: 'Marca con Sabor', description: 'Sabor Auténtico y Concepto Innovador: Destácate con una Oferta Diferenciada.' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tu Oportunidad Excepcional en el Mercado del Café de EE. UU.</h2>
      <div className={styles.cardsGrid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.card}>
            {/* Aquí puedes poner un ícono SVG o una imagen para cada beneficio */}
            <div className={styles.iconPlaceholder}>☕</div>
            <h3 className={styles.cardTitle}>{benefit.title}</h3>
            <p className={styles.cardDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyInvest;
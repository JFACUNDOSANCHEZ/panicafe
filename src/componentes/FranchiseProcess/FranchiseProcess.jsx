import React from 'react';
import styles from './FranchiseProcess.module.css';

const FranchiseProcess = () => {
  const steps = [
    { number: 1, title: 'Exploración Inicial', description: 'Envíanos tu solicitud y te contactaremos para una conversación inicial.' },
    { number: 2, title: 'Presentación Detallada', description: 'Conoce nuestro modelo de negocio, requisitos y oportunidades de mercado.' },
    { number: 3, title: 'Análisis y Planificación', description: 'Trabajamos contigo para encontrar la ubicación ideal y desarrollar tu plan de negocio.' },
    { number: 4, title: 'Capacitación y Montaje', description: 'Recibe formación completa para ti y tu equipo, y apoyo en la construcción de tu cafetería.' },
    { number: 5, title: 'Gran Apertura y Soporte Continuo', description: 'Celebra la inauguración y cuenta con nuestro apoyo constante para el crecimiento.' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tu Camino Hacia la Franquicia </h2>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchiseProcess;
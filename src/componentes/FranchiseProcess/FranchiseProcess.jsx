import React from 'react';
import styles from './FranchiseProcess.module.css';
// Importa los iconos de React Icons que se ajusten a tus frases
import { FaHeart, FaUserGraduate, FaCookieBite, FaChartBar, FaHandsHelping } from 'react-icons/fa';

const FranchiseProcess = () => {
  const steps = [
    { 
      icon: <FaHeart />, 
      title: 'Marca reconocida con clientes fieles'
    },
    { 
      icon: <FaUserGraduate />, 
      title: 'Capacitación completa para vos y tu equipo'
    },
    { 
      icon: <FaCookieBite />, 
      title: 'Recetas y productos exclusivos'
    },
    { 
      icon: <FaChartBar />, 
      title: 'Estrategia de marketing centralizada'
    },
    { 
      icon: <FaHandsHelping />, 
      title: 'Acompañamiento constante en cada etapa'
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Beneficios de ser un Franquiciado</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchiseProcess;
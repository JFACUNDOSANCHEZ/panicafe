import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        En 2023, Panicafé cruzó fronteras para conquistar nuevos paladares. 
        Hoy, tres sucursales en Texas comparten nuestra pasión por el café 
        y la pastelería artesanal, manteniendo intacta la esencia que nos vio nacer en Argentina.
      </h2>

      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/H8jGoehkiSc"
          title="Conoce nuestra franquicia"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;

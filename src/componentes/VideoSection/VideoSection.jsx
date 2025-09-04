import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CONOCE MÁS SOBRE LA FRANQUICIA</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.videoContainer}>
          {/* Aquí va el código para incrustar el video de YouTube */}
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/H8jGoehkiSc" /* <-- URL CORREGIDA */
            title="Conoce nuestra franquicia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.textContainer}>
          <p>
            [Nombre de la Cafetería] cuenta con un modelo de negocio probado y más de 10 años de trayectoria en el mercado de EE.UU. La propuesta de franquicias permite crecer y expandirse con un formato que favorece una óptima combinación entre rentabilidad, crecimiento y sostenibilidad del negocio.
          </p>
          <p>
            Nuestra marca es reconocida por la calidad de nuestros productos, nuestro ambiente único y el confort de nuestros espacios, que apuntan a satisfacer las necesidades de nuestros clientes y de la comunidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
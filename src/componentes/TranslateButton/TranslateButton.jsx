import React, { useEffect, useRef, useState } from 'react';
import styles from './TranslateButton.module.css';

// Helper para leer el idioma actual desde la cookie de Google Translate
const getGoogleTranslateCookieLang = () => {
  const name = 'googtrans';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      const cookieValue = cookie.substring(name.length + 1);
      const parts = cookieValue.split('/');
      return parts.length > 2 ? parts[parts.length - 1] : 'es';
    }
  }
  return 'es';
};

const TranslateButton = () => {
  const googleTranslateElementRef = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState(getGoogleTranslateCookieLang());
  const [isInitialized, setIsInitialized] = useState(false);

  // Cambia el idioma limpiando y seteando la cookie, luego recarga la página
  const changeLanguage = (lang) => {
    if (!isInitialized) return;

    // Limpiar cookie previa
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Setear nueva cookie
    const cookieValue = `/es/${lang}`;
    document.cookie = `googtrans=${cookieValue};path=/;domain=${window.location.hostname}`;
    document.cookie = `googtrans=${cookieValue};path=/`;

    setCurrentLanguage(lang);

    // Recargar para que Google Translate aplique el cambio
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'es,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        googleTranslateElementRef.current.id
      );
      setIsInitialized(true);
    };

    const addScript = document.createElement('script');
    addScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(addScript);

    return () => {
      if (addScript) {
        document.body.removeChild(addScript);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className={styles.container}>
      <button
        onClick={() => changeLanguage('es')}
        className={`${styles.languageButton} ${currentLanguage === 'es' ? styles.active : ''}`}
        aria-label="Cambiar a español"
      >
        <img src="https://flagcdn.com/w40/ar.png" alt="Bandera de Argentina" />
      </button>
      <span className={styles.separator}>|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`${styles.languageButton} ${currentLanguage === 'en' ? styles.active : ''}`}
        aria-label="Change to English"
      >
        <img src="https://flagcdn.com/w40/us.png" alt="Flag of USA" />
      </button>

      <div
        id="google_translate_element"
        ref={googleTranslateElementRef}
        style={{
          opacity: 0,
          pointerEvents: 'none',
          position: 'absolute',
          height: '40px',
          width: '100px',
          overflow: 'hidden',
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
};

export default TranslateButton;

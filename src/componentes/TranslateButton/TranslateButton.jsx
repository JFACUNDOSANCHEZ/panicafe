import React, { useEffect, useRef, useState } from 'react';
import styles from './TranslateButton.module.css';

// Leer idioma actual desde la cookie
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

// Borrar la cookie googtrans
const deleteGoogleTranslateCookie = () => {
  const hostname = window.location.hostname;

  // Sin dominio
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  // Dominio exacto
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;

  // Dominio de segundo nivel
  const parts = hostname.split('.');
  if (parts.length > 1) {
    const domain = '.' + parts.slice(-2).join('.');
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
  }
};

const TranslateButton = () => {
  const googleTranslateElementRef = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState(getGoogleTranslateCookieLang());
  const [isInitialized, setIsInitialized] = useState(false);

  const changeLanguage = (lang) => {
    // Redirige con parámetro para aplicar cambio antes de que se cargue Google Translate
    window.location.href = `?lang=${lang}`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam) {
      // Borrar y establecer la nueva cookie
      deleteGoogleTranslateCookie();
      const cookieValue = `/es/${langParam}`;

      // Setear cookie con múltiples variantes (para asegurar compatibilidad)
      const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';

      document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}${secureFlag}`;
      document.cookie = `googtrans=${cookieValue}; path=/${secureFlag}`;

      setCurrentLanguage(langParam);

      // Eliminar ?lang= de la URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Inicializar Google Translate solo después de aplicar cookie (si existe)
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

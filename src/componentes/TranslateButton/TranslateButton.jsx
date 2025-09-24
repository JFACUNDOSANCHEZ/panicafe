import React, { useEffect, useRef, useState } from 'react';
import styles from './TranslateButton.module.css';

// 💡 Helper function to get the current language from the Google Translate cookie
const getGoogleTranslateCookieLang = () => {
  const name = 'googtrans';
  const cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      const cookieValue = cookie.substring(name.length + 1, cookie.length);
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

  const setGoogleTranslateCookie = (lang) => {
    const cookieValue = `/es/${lang}`;
    document.cookie = `googtrans=${cookieValue};path=/;domain=${window.location.hostname}`;
    document.cookie = `googtrans=${cookieValue};path=/`;
  };

  const changeLanguage = (lang) => {
    if (!isInitialized || currentLanguage === lang) return;

    setGoogleTranslateCookie(lang);
    setCurrentLanguage(lang);

    window.location.reload();
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
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
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
        style={{ display: 'none' }}
      ></div>
    </div>
  );
};

export default TranslateButton;
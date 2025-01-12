import React from 'react';
import i18n from '../i18n';

function Footer() {
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  }
  
  return (
    <footer>
      <button className='ArrowButton' onClick={() => switchLanguage('en')}>English</button>
      <button className='ArrowButton' onClick={() => switchLanguage('de')}>German</button>
    </footer>
  );
}

export default Footer;
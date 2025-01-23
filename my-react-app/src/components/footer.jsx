import React from 'react';
import '../styles/footer.css';
import Logo2 from '../assets/Logo_2.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={Logo2}/>
      <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
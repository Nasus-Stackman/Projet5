import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import '../styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <Link to="/"><img  className='header__logo' src={Logo} /></Link>
      <nav className='navbar'>
        <ul className='navbar__link'>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/A_propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
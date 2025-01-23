import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import '../styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} />
      <nav className='nav'>
        <ul className='link'>
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
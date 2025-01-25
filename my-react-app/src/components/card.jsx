import React from 'react';
import '../styles/card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, src }) => {
  return (
    <Link to="/fiche_logement">
      <article className='card' >
        <h2>{title}</h2>
        <img src={src}/> 
        </article>
    </Link>
  )
};

export default Card;
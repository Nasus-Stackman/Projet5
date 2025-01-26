import React from 'react';
import '../styles/card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, src }) => {
  return (
    <Link className="style" to="/fiche_logement">
      <article className='card' >
        <img src={src} />
        <h2 className='title_card'>{title}</h2>
      </article>
    </Link>
  )
};

export default Card;
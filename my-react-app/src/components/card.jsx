import React from 'react';
import '../styles/card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, src, key1 }) => {
  return (
    <Link className="card_link" to={`/fiche_logement/${key1}`}>
      <article className='card' >
        <img src={src} />
        <h2 className='card__title'>{title}</h2>
      </article>
    </Link>
  )
};

export default Card;
import React from 'react';
import '../styles/card.css';

const Card = ({ titre }) => {
  return (
    <a>
      <article className='card'>Article -{titre}</article>
    </a>
  )
};

export default Card;
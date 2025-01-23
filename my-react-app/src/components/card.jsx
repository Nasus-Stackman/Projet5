import React from 'react';
import '../styles/card.css';

const Card = ({titre}) => {
  return <article className='card'>Article -{titre}</article>;
};

export default Card;
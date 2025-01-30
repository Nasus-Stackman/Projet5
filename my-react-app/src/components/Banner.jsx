import React from 'react';
import '../styles/banner.css';

function Banner({ src, alt, title }) {
    return (
        <div className='banner'>
            <article className='article__img'>
                <h1 className='banner__title'>{title}</h1>
                <img src={src} alt={alt}/>
            </article>
        </div>

    )
}

export default Banner
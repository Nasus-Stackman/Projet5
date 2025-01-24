import React from 'react';
import '../styles/banner.css';

function Banner({ src, alt, title }) {
    return (
        <div className='banner'>
            <article className='article_img'>
                <h1 className='title_banner'>{title}</h1>
                <img src={src} alt={alt}/>
            </article>
        </div>

    )
}

export default Banner
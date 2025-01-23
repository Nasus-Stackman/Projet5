import React from 'react';
import '../styles/banner.css';

function Banner({ src, alt, title }) {
    return (
        <div className='banner'>
            <article className='article_img'>
                <h2 className='title_banner'>{title}</h2>
                <img src={src} alt={alt}/>
            </article>
        </div>

    )
}

export default Banner
import React from 'react';
import '../styles/tag.css'

function Tag({ titretag }) {
    return (
        <div className='tag'>
            <p className='tag__title'>{titretag}</p>
        </div>
    )
}

export default Tag
import React from 'react';
import '../styles/tag.css'

function Tag({titretag}){
    return(
        <div className='tag'>
         <h3>{titretag}</h3>
        </div>
    )
}

export default Tag
import React from 'react';
import { useState } from 'react';
import Data from '../datas/liste.json'
import "../styles/carrousel.css"

function Carrousel({ title, Vignettes }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Vignettes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Vignettes.length) % Vignettes.length);
    };
    return (
        <div className='div_carrousel'>
            <img title={title} src={Vignettes[currentIndex]} />
            <button className='button_prev' onClick={prevSlide}><span className='text_hidden'>Précédent</span><i className="icone fa-solid fa-chevron-left"></i></button>
            <button className='button_next' onClick={nextSlide}><span className='text_hidden'>Suivant</span><i className="icone fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default Carrousel
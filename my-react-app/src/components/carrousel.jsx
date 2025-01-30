import React from 'react';
import { useState } from 'react';
import Data from '../datas/liste.json'
import "../styles/carrousel.css"

function Carrousel({ taille, Vignettes }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Vignettes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Vignettes.length) % Vignettes.length);
    };
    return (
        taille >= 2 ? (
            <div className='div_carrousel'>
                <img src={Vignettes[currentIndex]} />
                <button className='div_carrousel__button_prev' onClick={prevSlide}>
                    <span className='div_carrousel__text_hidden'>Précédent</span>
                    <i className="icone fa-solid fa-chevron-left"></i>
                </button>
                <button className='div_carrousel__button_next' onClick={nextSlide}>
                    <span className='div_carrousel__text_hidden'>Suivant</span>
                    <i className="icone fa-solid fa-chevron-right"></i>
                </button>
                <div className="div_carrousel__counter">
                    {currentIndex + 1} / {Vignettes.length}
                </div>
            </div>) : (<div className='div_carrousel'><img src={Vignettes} /></div>)

    )
}



export default Carrousel

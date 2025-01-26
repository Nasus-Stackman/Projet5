import React from 'react';
import { useState } from 'react';
import Data from '../datas/liste.json'
import "../styles/carrousel.css"

function Carrousel({ title, src }) {
    const Vignettes = ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"]
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Vignettes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Vignettes.length) % Vignettes.length);
    };
    return (
        <div className='carrousel'>
            <img title={title} src={Vignettes[currentIndex]} />
            <button className='button_prev' onClick={prevSlide}><span className='text_hidden'>Précédent</span><i className="icone fa-solid fa-chevron-left"></i></button>
            <button className='button_next' onClick={nextSlide}><span className='text_hidden'>Suivant</span><i className="icone fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default Carrousel
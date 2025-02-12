import React from 'react';
import '../styles/collapse.css'
import { useState } from 'react';

function Collapse({ titre_collapse, description, custom_div, custom_collapse, custom_div_collapse }) {   /* 3 nouvelles props pour le style des collapse selon la page */
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={custom_div}>
            <div className={`collapse ${custom_collapse} ${isOpen ? 'open' : ''}`}>
                <h2 className='collapse__title'>{titre_collapse}</h2>
                <button onClick={toggleCollapse}><span className='collapse__button--hidden'>Cliquer</span>
                    <i className={` ${isOpen ? 'collapse__icone--rotate open' : ''} collapse__icone fa-solid fa-chevron-up`}></i></button>

            </div>

            <div>
                {isOpen && (
                    <div className={`div_collapse ${custom_div_collapse} ${isOpen ? 'open' : ''}`}>
                        <p className='div_collapse__text'>{description}</p>
                    </div>
                )}
            </div>
        </div>

    )

}

export default Collapse

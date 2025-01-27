import React from 'react';
import '../styles/collapse.css'
import { useState } from 'react';

function Collapse({ titre_collapse, description }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='collapse'>
            <h2 className='title_collapse'>{titre_collapse}</h2>
            <button onClick={toggleCollapse}><span className='hidden'>Cliquer</span><i className="icone fa-solid fa-chevron-up"></i></button>
            {isOpen && (
                <div className={`div_collapse ${isOpen ? 'open' : ''}`}>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )

}

export default Collapse
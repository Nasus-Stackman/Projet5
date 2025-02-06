import React from 'react';
import '../styles/page404.css'
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div>
            <h1 className='title_404'>404</h1>
            <h2 className='message_404' >Oups! La page que vous demandez n'existe pas.</h2>
            <h3><Link className='return_home' to="/">Retourner sur la page d'accueil</Link></h3>
        </div>
    )
}

export default Page404
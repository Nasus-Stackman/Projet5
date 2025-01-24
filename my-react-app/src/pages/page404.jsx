import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/page404.css'

function Page404() {
    return (
        <div>
        <Header />
            <h1 className='title_404'>404</h1>
            <h2 className='message_404' >Oups, la page que vous demandez n'existe pas.</h2>
            <h3 className='return_404' >Retourner sur la page d'accueil </h3>
            <Footer />
        </div>
    )
}

export default Page404
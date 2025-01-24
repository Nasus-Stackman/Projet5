import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/footer';
import image2 from '../assets/Image_montagnes.png';

const Apropos = () => {
    const ListeTitre = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
    const ListeDescription =['Les annonces','La bienveillance', 'La qualité', 'La sécurité']
    return (
        <div>
            <Header />
            <Banner src={image2} alt='Image de montagnes' />
            {ListeTitre.map((elem, index)=>
            <Collapse key={index} titre_collapse={elem} description={ListeDescription[index]}/>          
            )}
            <Footer />

        </div>
    )

}

export default Apropos
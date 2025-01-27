import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/footer';
import image2 from '../assets/Image_montagnes.png';

const Apropos = () => {
    const ListeTitre = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
    const ListeDescription = ['Les annonces postés sur Kasa garanrissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement véfifiées par nos équipes.', 'La bienveillance fait partie des valeurs fondatrices che Kasa.', 'La qualité', 'La sécurité est la priorité de Kasa']
    return (
        <div>
            <Header />
            <Banner src={image2} alt='Image de montagnes' />
            {ListeTitre.map((elem, index) =>
                <Collapse key={index} titre_collapse={elem} description={ListeDescription[index]} />
            )}
            <Footer />

        </div>
    )

}

export default Apropos
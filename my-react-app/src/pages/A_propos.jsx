import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/footer';
import image2 from '../assets/Image_montagnes.png';
import '../styles/A_propos.css'

const Apropos = () => {
    const ListeTitre = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
    const ListeDescription = ['Les annonces postés sur Kasa garanrissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement véfifiées par nos équipes.',
        'La bienveillance fait partie des valeurs fondatrices che Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme',
        'La qualité du service est au coeur de notre engagement che Kasa. Nous veillons à ce que chaque interaction soit empreinte de respect et de bienveillance.',
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l/hôte qu/au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés']
    return (
        <div>
            <Header />
            <Banner src={image2} alt='Image de montagnes' />
            <div className='div_apropos_collapse'>
                {ListeTitre.map((elem, index) =>
                    <Collapse key={index} titre_collapse={elem} description={ListeDescription[index]} />
                )}
            </div>

            <Footer />

        </div>
    )

}

export default Apropos
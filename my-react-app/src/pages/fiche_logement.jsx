import React from 'react';
import Header from '../components/Header';
import Carrousel from '../components/carrousel';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse'
import Footer from '../components/footer';
import Data from '../datas/liste.json'
import Home from './home';
import '../styles/fiche_logement.css'
import { useParams } from 'react-router-dom';

const FicheLogementPage = () => {
  const { key } = useParams();                        /* pour fixer l'id du fichier JSON sur la page*/
  const Object = Data.find(elem => elem.id === key)   /* find marche mieux que filter, car filter nécéssite un [0]*/
  const range = [1, 2, 3, 4, 5]                       /* je créé un tableau pour la comparaison avec le 'rating'*/
  const value = parseInt(Object.rating)               /* parseInt pour convertir le str du JSON en int*/
  const Vignettes = []
  Object.pictures.map((elem) =>
    Vignettes.push(elem)
  )
  const Taille = Vignettes.length
  return (
    <div>
      <Header />
      <Carrousel taille={Taille} Vignettes={Vignettes} />
      <div className='div_main'>
        <div className='div_main_title'>
          <h1 className='title_logement'>{Object.title}</h1>
          <h2 className='location_logement'>{Object.location}</h2>
          <div className='div_tags'>
            {Object.tags.map((elem, index) =>
              <Tag key={`${elem}-${index}`} titretag={elem} />
            )}
          </div>
        </div>
        <div className='div_main_rating'>
          <div className='div_host'>
            <p className='host_name'>{Object.host.name}</p>
            <figure className='figure'><img src={Object.host.picture} /></figure>
          </div>
          <div className='div_stars'>
            {range.map((elem, index) =>
              value >= elem ? <i key={index} className="star fa-solid fa-star"></i> : <i key={elem} className="neutral fa-solid fa-star"></i>)}
          </div>
        </div>
      </div>
      <div className='div_main_collapse'>
        <Collapse titre_collapse='Description' description={Object.description} />
        <Collapse titre_collapse='Équipements' description={Object.equipments.map((elem, index) =>
          <span key={index}>{elem}<br /></span>)} />
      </div>
      <Footer />
    </div>
  );
};

export default FicheLogementPage;
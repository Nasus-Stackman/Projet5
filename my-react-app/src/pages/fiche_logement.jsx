import React from 'react';
import Header from '../components/Header';
import Carrousel from '../components/carrousel';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse'
import Footer from '../components/footer';
import Data from '../datas/liste.json'
import '../styles/fiche_logement.css'

const FicheLogementPage = () => {
  return (
    <div>
      <Header />
      <Carrousel />
      <div className='div_main'>
        <div className='div_main_title'>
          <h1 className='title_logement'>{ }Test titre</h1>
          <h2 className='location_logement{'>{ }Test titre</h2>
          <Tag />
        </div>
        <div className='div_main_rating'>
          <div className='host'>
            <p className='host_name'>test host{ }</p>
            <figure className='figure'></figure>
          </div>
          <i className="star fa-solid fa-star"></i>
        </div>
      </div>
      <div className='div_main_collapse'>
        <Collapse />
      </div>
      <Footer />
    </div>
  );
};

export default FicheLogementPage;
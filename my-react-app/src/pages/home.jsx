import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/card';
import image1 from '../assets/Image_cote.png'
import Data from '../datas/liste.json';
import '../styles/home.css'

const Home = () => {
  return (
    <main>
      <Banner title='Chez vous, partout et ailleurs' src={image1} alt='Image cotière' />
      <div className='main'>
        {
          Data.map((elem) =>
            <Card key={elem.id} id={elem.id} src={elem.cover} title={elem.title} />
          )
        }
      </div>
    </main>
  );
};

export default Home;

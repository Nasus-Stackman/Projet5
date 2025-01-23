import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/card';
import Footer from '../components/footer';
import image1 from '../assets/Image_cote.png'
import '../styles/home.css'

const Home = () => { 
  return (
    <div>
      <Header />
      <Banner title='Chez vous, partout et ailleurs' src={image1} alt='Image cotière'/>
      <main className='main'>
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import image2 from '../assets/Image_montagnes.png';

const Apropos = () => {
    return (
        <div>
            <Header />
            <Banner src={image2} alt='Image de montagnes'/>
            <Footer />

        </div>
    )

}

export default Apropos
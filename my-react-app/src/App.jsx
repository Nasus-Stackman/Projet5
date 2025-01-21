import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import FicheLogementPage from './pages/fiche-logement';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche_logement" element={<FicheLogementPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Apropos from './pages/A_propos';
import FicheLogementPage from './pages/fiche_logement';
import Page404 from './pages/page404';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A_propos" element={<Apropos />} />
          <Route path='/fiche_logement/:key' element={<FicheLogementPage/>}/>
          <Route path="*" element={<Page404 />} />
          <Route path='/404' element={<Page404 />} />
        </Routes>
    </Router>
  );
};

export default App;
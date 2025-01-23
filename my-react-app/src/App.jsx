import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Apropos from './pages/A_propos';

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A_propos" element={<Apropos />} />
        </Routes>
      </main>
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
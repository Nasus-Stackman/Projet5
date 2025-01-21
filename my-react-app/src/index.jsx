import React from 'react';
import ReactDOM from 'react-dom/client';  // En React 18, on utilise "createRoot"
import './index.css';  // Import des styles globaux si nécessaire
import App from './App';  // Import de l'application principale

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crée le root React

root.render(
  <React.StrictMode>  
    <App />  
  </React.StrictMode>
);
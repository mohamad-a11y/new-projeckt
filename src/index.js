import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './page/Home';
import Produkte from './page/Produkte';
import Preise from './page/Preise';
import Kontakt from './page/Kontakt';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/produkte" element={<Produkte />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header';
import LocationsMap from './componentes/LocationsMap/LocationsMap';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import Contact from './componentes/Contact/Contact';
import Franquicias from './componentes/Franquicias/Franquicias';
import Sucursales from './componentes/Sucursales/Sucursales';
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop";
import './App.css';

const App = () => {
  return (
    <>
      {/* Remova o <BrowserRouter> daqui! */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/franquicias" element={<Franquicias />} />
        <Route path="/eeuu" element={<LocationsMap />} />
        <Route path="/somospanicafe" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sucursales" element={<Sucursales />} />
      </Routes>
    </>
  );
};

export default App;
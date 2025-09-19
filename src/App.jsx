// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header'; // El header principal
import Nav from './componentes/Nav/Nav'; // La barra de navegación
import Producto from './componentes/producto/Producto'; // Un componente de página
import FranchisePage from './componentes/FranchisePage/FranchisePage'; // Otro componente de página
import LocationsMap from './componentes/LocationsMap/LocationsMap';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import './App.css';
import Contact from './componentes/Contact/Contact';
import Franquicias from './componentes/Franquicias/Franquicias';
import Sucursales from './componentes/Sucursales/Sucursales';

const App = () => {
  return (
    <>
      

      <Routes>
        {/* Aquí defines las rutas y qué componente se muestra en cada una */}
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
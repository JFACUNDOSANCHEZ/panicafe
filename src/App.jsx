// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header'; // El header principal
import Nav from './componentes/Nav/Nav'; // La barra de navegación
import Producto from './componentes/producto/Producto'; // Un componente de página
import FranchisePage from './componentes/FranchisePage/FranchisePage'; // Otro componente de página
import './App.css';

const App = () => {
  return (
    <>

      <Routes>
        {/* Aquí defines las rutas y qué componente se muestra en cada una */}
        <Route path="/" element={<Header />} />
        <Route path="/franquicias" element={<FranchisePage />} />
      </Routes>
    </>
  );
};

export default App;
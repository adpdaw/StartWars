import React from 'react';
import "./css/style.css";
import "./css/normaliza.css";
import Nav from './Componentes/Nav.js';
import Footer from './Componentes/Footer.js';
import Main from './Componentes/Main.js';
import Peliculas from './Componentes/Peliculas';


function App() {
  return (
    <React.Fragment>

      <Nav/>
      <Main>
{/* El componente Películas contiene toda lógica de la aplicación */}
      <Peliculas/>    
      </Main>
      <Footer/>
   
   </React.Fragment>
  );
};

export default App;

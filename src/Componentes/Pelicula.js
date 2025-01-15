import React from "react";
import { invertirCadena } from "../Biblioteca/traerDatos.js";

//Componente que pinta los datos de una Película.
function Pelicula(props) {
  return (
    <React.Fragment>
      <div id="box2" className="item1">
        <h1>{props.datos.title}</h1>
        <h2>Director</h2>
        <p>{props.datos.director}</p>
        <h2>Productor</h2>
        <p>{props.datos.producer}</p>
        <h2>Fecha</h2>
        <p>{invertirCadena(props.datos.release_date)}</p>
        <h2>Sinopsis</h2>
        <p>{props.datos.opening_crawl}</p>
      </div>
    </React.Fragment>
  );
}

export default Pelicula;

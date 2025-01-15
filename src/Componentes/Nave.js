import React from "react";
//Componente que pinta los datos de una nave.
function Nave(props) {
  return (
    <React.Fragment>
      <div id="box8" className="item2">
        <h1>Características Naves</h1>
        <p> Nombre: {props.datos.name} </p>
        <p>Modelo: {props.datos.model} </p>
        <p>Fabricado por: {props.datos.manufacturer} </p>
        <p>Coste: {props.datos.cost_in_credits} Créditos</p>
        <p>Longitud: {props.datos.length} metros</p>
        <p>Velocidad MAX: {props.datos.max_atmosphering_speed} Km/h</p>
        <p>Tripulación: {props.datos.crew} </p>
        <p>Clase: {props.datos.starship_class} </p>
      </div>
    </React.Fragment>
  );
}

export default Nave;

import React from "react";
//Componente que pinta los datos de un actor.
function Actor(props) {
  return (
    <React.Fragment>
      <div id="box3" className="item2">
        <h1>Características</h1>
        <p> Nombre: {props.datos.name} </p>
        <p>
          Altura: {props.datos.height}
          {" Cm."}{" "}
        </p>
        <p>
          Peso: {props.datos.mass}
          {" Kg."}{" "}
        </p>
        <p>Color de pelo: {props.datos.hair_color} </p>
        <p>Color de ojos: {props.datos.eye_color} </p>
        <p>Genero: {props.datos.gender} </p>
      </div>
    </React.Fragment>
  );
}

export default Actor;

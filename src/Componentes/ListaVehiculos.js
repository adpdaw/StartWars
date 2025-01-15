import React from "react";

//Componente que mapea los datos que recibe y pinta la lista de vehículos de un actor.
function ListaVehiculos(props) {
  return (
    <React.Fragment>
      <div id="box5" className="item2">
        <h1>Vehículos</h1>
        {props.datos.length !== 0 ? (
          props.datos.map((v, i, a) => {
            return (
              <p
                className="vehicle"
                id={v.value.url}
                key={i}
                onClick={() => {
                  props.funcionVehicle(v.value.url); //Función para mostrar datos de un vehículo.
                }}
              >
                {v.value.name}
              </p>
            );
          })
        ) : (
          <p className="alert">No tiene vehículos</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default ListaVehiculos;

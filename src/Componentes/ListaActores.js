import React from "react";

//Componente que mapea los datos que recibe y pinta la lista de actores de una película.
function ListaActores(props) {
  return (
    <React.Fragment>
      <div id="box4" className="item2">
        <h1>Actores</h1>
        {props.datosActores.length !== 0 ? (
          props.datosActores.map((v, i, a) => {
            if (i < 10) {
              return (
                <p
                  className="actor"
                  id={v.value.url}
                  key={i}
                  onClick={() => {
                    props.funcion(v.value.url);// Función para obtener los datos del actor
                    props.funcionVehicle(v.value.url);//Función para obtener sus vehículos si los tiene.
                    props.funcionNaves(v.value.url);//Función para obtener sus naves si lss tiene.
                  }}
                >
                  {v.value.name}
                </p>
              );
            }
            return null;
          })
        ) : (
          <p className="alert">
            No se han encontrado los Actores de esta película
          </p>
        )}
      </div>
    </React.Fragment>
  );
}

export default ListaActores;

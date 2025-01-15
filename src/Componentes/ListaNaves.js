import React from "react";

//Componente que mapea los datos que recibe y pinta la lista de naves de un actor.
function ListaNaves(props) {
  return (
    <React.Fragment>
      <div id="box6" className="item2">
        <h1>Naves</h1>
        {props.datos.length !== 0 ? (
          props.datos.map((v, i, a) => {
            return (
              <p
                className="nave"
                id={v.value.url}
                key={i}
                onClick={() => {
                  props.funcionNave(v.value.url);//Función para obtener los datos de una nave.
                }}
              >
                {v.value.name}
              </p>
            );
          })
        ) : (
          <p className="alert">No tiene naves</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default ListaNaves;

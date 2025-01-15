import React from "react";

//Componente que mapea los datos que recibe y pinta la lista de películas.
function ListaPeliculas(props) {
  return (
    <React.Fragment>
      <div id="box1" className="item1">
        <h1>Películas</h1>
        <ul>
          {props.datos.length !== 0 ? (
            props.datos.map((v, i, a) => {
              return (
                <li
                  id={v.url}
                  key={i}
                  onClick={() => {
                    props.funcion(v.url);//Función para mostrar los datos de la película.
                    props.funcionActores(v.url);// Función para mostrar la lista de actores.
                  }}
                >
                  {v.title}
                </li>
              );
            })
          ) : (
            <p className="alert">No se han encontrado Películas</p>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ListaPeliculas;

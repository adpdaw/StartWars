

const obtenerDatos = (url) => {
    return (
      fetch(url)
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((datos) => {
          return datos;
        })
        .catch(() => {
          return new Error("Ha habido un error.");
        })
    );
  };

  function invertirCadena(cad) {
    return cad.split("-").reverse().join("/ ");
  }

  export{obtenerDatos, invertirCadena};
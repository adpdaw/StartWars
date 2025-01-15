import React, { useState, useEffect } from "react";
import "../css/style.css";
import "../css/normaliza.css";
import { obtenerDatos } from "../Biblioteca/traerDatos.js";
import ListaPeliculas from "./ListaPeliculas.js";
import Pelicula from "./Pelicula";
import ListaActores from "./ListaActores.js";
import Actor from "./Actor.js";
import ListaVehiculos from "./ListaVehiculos.js";
import ListaNaves from "./ListaNaves.js";
import Vehiculo from "./Vehiculo.js";
import Nave from "./Nave.js";

function Peliculas() {
  //Variables e inicializando estados.
  const url = "https://swapi.py4e.com/api/films/";
  const valorInicial = [];
  const peliculaInicial = {};
  const actoresInicial = [];
  const actorInicial = {};
  const vehiclesInicial = [];
  const vehicleInicial = {};
  const navesInicial = [];
  const naveInicial = {};

  const [peliculas, setPeliculas] = useState(valorInicial);
  const [pelicula, setPelicula] = useState(peliculaInicial);
  const [actores, setActores] = useState(actoresInicial);
  const [actor, setActor] = useState(actorInicial);
  const [vehicles, setVehicles] = useState(vehiclesInicial);
  const [vehicle, setVehicle] = useState(vehicleInicial);
  const [naves, setNaves] = useState(navesInicial);
  const [nave, setNave] = useState(naveInicial);

  //Traer las películas y actualizar el estado.
  const getPeliculas = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPeliculas(datos.results);
    }
  };

  //Traer los datos de la película seleccionada actualizar estado.
  const getDatosPelicula = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPelicula(datos); //Cambia el estado pinta los datos de la película seleccionada.
      setActor(actorInicial);//👇 Limpia todos los datos si selecciona una nueva película.
      setVehicles(vehiclesInicial); 
      setVehicle(vehicleInicial);
      setNaves(navesInicial);
      setNave(naveInicial);
    }
  };

  //Se cargan las películas al inicio.
  useEffect(() => {
    getPeliculas(url);
  }, []);

  // Trae la lista de actores que participan en la película seleccionada.
  const getActores = async (origen) => {
    let datos = await obtenerDatos(origen);
    //Mapea e introduce en un array todas las url de los actores.
    let arrayPromesas = datos.characters.map((v, i, a) => {
      return obtenerDatos(v);
    });
    //Se consume la promesa de promesas con await.
    const valoresPromesa = await Promise.allSettled(arrayPromesas);
    setActores(valoresPromesa); // Se cambia el estado
  };

  //Trae los datos del actor seleccionado
  const getDatosActor = async (origen) => {
    let datos = await obtenerDatos(origen);
    setActor(datos); //Cambia el estado, muestra características naves y vehículos del actor seleccionado.
    setVehicle(vehicleInicial);
    setNave(naveInicial);
  };

  //Trae la lista de vehículos del actor seleccionado.
  const getVehicles = async (origen) => {
    let datos = await obtenerDatos(origen);
    //Mapea e introduce en un array todas las url de los vehículos.
    let arrayPromesas = datos.vehicles.map((v, i, a) => {
      return obtenerDatos(v);
    }); //Se consume la promesa de promesas con await.
    const valoresPromesa = await Promise.allSettled(arrayPromesas);
    setVehicles(valoresPromesa); // Se cambia el estado
  };

  //Trae la lista de naves del actor seleccionado.
  const getNaves = async (origen) => {
    let datos = await obtenerDatos(origen);
    //Mapea e introduce en un array todas las url de los vehículos.
    let arrayPromesas = datos.starships.map((v, i, a) => {
      return obtenerDatos(v);
    }); //Se consume la promesa de promesas con await.
    const valoresPromesa = await Promise.allSettled(arrayPromesas);
    setNaves(valoresPromesa); // Se cambia el estado
  };

  //Trae los datos de el vehículo seleccionado.
  const getVehicle = async (origen) => {
    let datos = await obtenerDatos(origen); //Se consume la promesa con await.
    setVehicle(datos);// Se cambia el estado.
  };

  //Trae los datos de la nave seleccionada.
  const getNave = async (origen) => {
    let datos = await obtenerDatos(origen); //Se consume la promesa con await.
    setNave(datos);// Se cambia el estado.
  };

  return (
    <React.Fragment>
        {/* Componente ListaPeliculas se incluyen las funciones que permiten mostrar estos datos al hacer clic sobre una película de la lista. Muestra la película y los actores */}
      <ListaPeliculas
        datos={peliculas}
        funcion={getDatosPelicula}
        datosActores={actores}
        funcionActores={getActores}/>

       {/* Componente Película recibe por props el estado de la película */}
      {Object.keys(pelicula).length !== 0 ? <Pelicula datos={pelicula} /> : ""}

      {/* Componente ListActores, se incluyen las funciones que permiten mostrar estos datos al hacer clic sobre un actor de la lista */}
      {Object.keys(actores).length !== 0 ? (
        <ListaActores
          datosActores={actores}
          funcion={getDatosActor}
          datos={vehicles}
          funcionVehicle={getVehicles}
          datosNaves={naves}
          funcionNaves={getNaves} />) : ( "" )}

      {/* Componente Actor muestra las características del actor seleccionado */}
      {Object.keys(actor).length !== 0 && <Actor datos={actor} /> }

        {/* Componente ListaVehiculos, se incluyen las funciones que permiten mostrar estos datos al 
        hacer clic sobre un vehículo de la lista. Esta ternaria te la explico en clase, 
        fíjate que le digo si no hay actores muestra vacío si no se filtrará en el componente 
        y mostrará los vehículos a o el mensaje de no hay vehículos*/}
      {Object.keys(actor).length > 1 ? (
        <ListaVehiculos datos={vehicles} funcionVehicle={getVehicle} />) : ("")}

         {/* Componente ListaNaves, se incluyen las funciones que permiten mostrar estos datos al hacer clic sobre una nave de la lista. Ternaria igual que la de arriba 👆 */}
      {Object.keys(actor).length > 1 ? (
        <ListaNaves datos={naves} funcionNave={getNave} />) : ("" )}

         {/* Componente Vehículo muestra las características del vehículo seleccionado */}
      {Object.keys(vehicle).length !== 0 ?  <Vehiculo datos={vehicle} /> : ""}

       {/* Componente Nave muestra las características de la nave seleccionada */}
      {Object.keys(nave).length !== 0 ? <Nave datos={nave} /> : ""}
    </React.Fragment>
  );
}

export default Peliculas;

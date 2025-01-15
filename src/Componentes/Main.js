import React from "react";
import "../css/style.css";
import "../css/normaliza.css";

//Main le paso recibirá por children el componente Películas que contiene a los demás componentes.
function Main(props) {
  return (
    <React.Fragment>
      <main className="page">
        <div className="container">{props.children}</div>
      </main>
    </React.Fragment>
  );
}

export default Main;

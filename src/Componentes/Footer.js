import React from "react";
import { useState, useEffect } from "react";
import "../css/style.css";
import "../css/normaliza.css";

function Footer() {

  const valorInicial = 0;
  const imgInicial = "";
  const [year, setYear] = useState(valorInicial);
  const [image, setImage] = useState(imgInicial);

  const currentYear = () => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  };
//Se carga el año y la imagen al inicio.
  useEffect(() => {
    currentYear();
    setImage(require("../img/r2-d2.png"));
  }, []);

  return (
    <React.Fragment>
      <footer className="page-footer">
        <p>
          &copy; <span id="date">{year}</span>
          <span className="footer-logo">My sitio Web</span> Hecho con 💛
          <a href="https://adp-profile.netlify.app" target="_blank">
            Alfredo Díez
          </a>
        </p>
      </footer>
      <img src={image} alt="R2-D2 imagen" className="back-to-top" />
      <audio>
        <source src="../img/r2_d2.mp3"></source>
        Your browser isn't invited for super fun audio time.
      </audio>
    </React.Fragment>
  );
}

export default Footer;

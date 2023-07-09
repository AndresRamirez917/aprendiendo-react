import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const EjerFETCH2Unidad6 = () => {
  const [datos, setDatos] = useState([]);

  useEffect( () => {
    // error que se presenta al usar React.StrictMode cuando se crea un nuevo proyecto
    // esto duplica el número de items a mostar, se corrige eliminando estas líneas del
    // proyecto que se encuentran el el archivo index.js.
    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion
      .then(datos=> datos.json())
      .then(lectura=> {
        lectura.results.map((persona) => {
          setDatos((e) => 
          [...e,<div className="fetch2Styles" key={persona.email}>
            <div>{persona.name.first} {persona.name.last}</div>
            <div>
            <img src={persona.picture.thumbnail} alt="" />
            </div>
            </div>]);
        });
      })
      .catch(() => console.log("Ha ocurrido un horrorsh"));
  }, []);

  return (
    <div>
      <h1>Premiados</h1>
      {datos}
    </div>
  );
};

export default EjerFETCH2Unidad6;

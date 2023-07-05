import React from 'react'
import { Fragment, useEffect, useState } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

const EjerFETCHunidad6 = () => {
  const[nombre, setNombre] = useState("");
const[imagen, setImagen] = useState("");
useEffect(()=>{

  const url="https://randomuser.me/api/"
const peticion = fetch(url);
peticion
.then(datos=>datos.json())
.then(datosJson => {
  //funciona para unir el nombre y el apellido con un espacon pero no buena práctica
  // setNombre(datosJson.results[0].name.first + " " + datosJson.results[0].name.last)
  setNombre(`${datosJson.results[0].name.first} ${datosJson.results[0].name.last}`)
  setImagen(`${datosJson.results[0].picture.thumbnail}`)
  })
.catch(()=>console.log("Se ha producido un error"));
},[])

return (
  <Fragment>
   
    <h1>El empleado/a del mes:</h1>
    <div className='fetchStyles'>
    {nombre}
      <img src={imagen} alt="" />
    </div>
  
  </Fragment>
);

}

export default EjerFETCHunidad6
import React from 'react'
import { useState } from 'react';

const AumentaElementosArray = () => {
    const [arrayNum, setNum] = useState([1,2,3]);
    const [numero, setNumero] = useState(4);
    const agregaNumero = () => {
        setNumero(numero+1);
        setNum([...arrayNum, numero])
    }
  return (
    
    <div className='container mt-4 mb-4'>
        <>
        <h1>Agregar un elemento a un array usando dos useState</h1>
        <p>En este componente se usaron dos useState para demostrar que no hay límite en el uso de estos, el primero de ellos
            se uso como array que almacena los elementos 1,2,3. el segundo array como número a ingresar (4) usando su setState se
            le sumó 1 y con el botón agregarselo al primer array a través del spread operator, no se usa push sino que se concatenan
            los arrays con el spread operator.
            En resumen, se crean dos arrays y al primero se le agrega el valor del segundo +1 usando su setState.
        </p>
        {arrayNum.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        
      <button className='btn btn-dark' onClick={agregaNumero}>Agregar número</button>
        </>
     
    </div>
  )

}

export default AumentaElementosArray

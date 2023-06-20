import React, { useState } from 'react'


const Contador2 = () => {
    const [contador, setContador] = useState(0)
    const incrementar = () => {
        setContador(contador+1);
        console.log(contador);
    }

  return (
    <div className='container mt-4 mb-4 text text-primary'>
         <h1 >Creación de un contador sencillo</h1>
         <h2 >{contador}</h2>
        <button className='btn btn-primary' onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default Contador2

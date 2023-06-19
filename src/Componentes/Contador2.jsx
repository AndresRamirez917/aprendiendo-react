import React, { useState } from 'react'

const Contador2 = () => {
    const [contador, setContador] = useState(0)
    const incrementar = () => {
        setContador(contador+1);
        console.log(contador);
    }

  return (
    <div className='container mt-4 mb-4'>
         <h1 className='text text-warning'>Creación de un contador sencillo</h1>
         <h2 className='text text-warning'>{contador}</h2>
        <button className='btn btn-warning' onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default Contador2

import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)
    const aumentaClick = () => {
        setContador(contador + 1)
       
    }
  return (
    <React.Fragment>
    <h2>Contador para ejemplo de uso de Hooks con useState</h2>
    <p>El contador es un componente que usa el useState para actualizar el renderizado
        del DOM, de otra forma el contador no se pintaria cada vez que se hace click en 
        el botón, se hace uso de un hook para actualizar el renderizado del DOM.
        Todo componente se debe de llamar donde va a ser renderizado, y debe de ser importado
        respectivamente
    </p>
      <h2>{contador}</h2>
      <button className='btn btn-dark' onClick={aumentaClick}>Aumentar</button>
    </React.Fragment>
  )
}

export default Contador

import React from 'react'
import { Link } from 'react-router-dom'

const C = () => {
  return (
    <div className='muestraLetra'>
      C
      <h6 className='h6Style'>
        <Link to="/pagina2">Ir a página 2 usando Link</Link>
      </h6>
      
      </div>
  )
}

export default C
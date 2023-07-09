import React, { useContext } from 'react'
import Contextoo from '../contextos/Contextoo'

const Ubicacion = () => {
const {alumno}=useContext(Contextoo)
const idioma=alumno[3].idioma
  return (
    <div className='ubicacion'>
      <h1>{alumno[idioma].boton2}</h1>
      <div className="texto">
        {alumno[idioma].direccion}
      </div>
    </div>
  )
}

export default Ubicacion
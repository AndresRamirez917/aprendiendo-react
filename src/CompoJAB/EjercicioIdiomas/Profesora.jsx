import React, { useContext } from 'react'
import marta from "../images/marta.PNG"
import Contexto  from '../contextos/Contextoo'

const Profesora = () => {
  const {alumno} = useContext(Contexto)
  const idioma = alumno[3].idioma;
  const imagen =`../src/CompoJAB/images/${alumno[idioma].foto}`
  const image = `./images/${alumno[idioma].foto}`
  return (
    <div className='profesora'>
      <h1>{alumno[idioma].boton1} </h1>
      <div className="foto">
        <img className='imagen' src={marta} alt="" />
      </div>
      <div className="nombre">{alumno[idioma].nombre}</div>
    </div>
  )
}

export default Profesora
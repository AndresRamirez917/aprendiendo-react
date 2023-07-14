import React, {Fragment, useContext} from 'react'
import { Link } from 'react-router-dom'
import Contexto from '../Context/Contexto'

const Destino = ({nombre, imagen, situacion}) => {
  const ruta = `/images/${imagen}`  
  const {contratacion} = useContext(Contexto)
  const encontrado = contratacion.find(e => e.sitio === nombre)
  return (
    <Fragment>
      <div className='container'>
        <div className='destino'> 
        <div className='nombre'>{nombre}</div>
        <div className='situacion'>{situacion}</div>
        <img src={ruta} alt="" />   
       <div className='flex'>
       <Link to={`/destino/${nombre}`}>Mas info</Link>  
        {(encontrado) && <div className='circulo'></div>} 
       </div>
        </div>
        </div>
    </Fragment>
    )
  
}

export default Destino
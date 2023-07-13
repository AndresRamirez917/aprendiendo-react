import React, { Fragment } from 'react'
import imagen0 from "../../../reyes/rey_atanagildo.png";

const Destino = ({nombre, imagen, situacion}) => {
    const ruta = `../../../EjersUnid10/Ejer2/images//${imagen}`
  return (
    <Fragment>
        <div className='destino'>
        <div className='nombre'>{nombre}</div>
        <div className='situacion'>{situacion}</div>
        <img src={imagen0} alt="" />
        </div>
    </Fragment>
  )
}

export default Destino
import React from 'react'
import Avatar from './Avatar'

                    //=props
const Comentario = ({sujeto}) => {
  return (
    <div className='container text text-warning'>
      <>
      <h1>Componente Comentario {sujeto.nombre}</h1>
      <div className='media'>
        {/* <img src={sujeto.urlImagen} alt="" className='mr-3' /> */}
        <Avatar urlImagen={sujeto.urlImagen} />
    <div className='media-body'>
    <h5 className='mt-0'>{sujeto.nombre}</h5>
    <p>{sujeto.comentario}</p>
    </div>
      </div>
      </>
    </div>
  )
}

export default Comentario

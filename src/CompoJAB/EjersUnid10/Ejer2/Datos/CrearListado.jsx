import React from 'react'
import Data from "./Data"
import { Fragment } from 'react'
import Destino from "../Paginas/Destino"

const CrearListado = ({zona}) => {
const listado = Data.filter(destino=> destino.zona===zona)
  return (
    <Fragment>
        <section className='lista'>
            {listado.map(dato=>
            (<Destino key={dato.nombre}{...dato} />)
            )}
        </section>
    </Fragment>
  )
}

export default CrearListado
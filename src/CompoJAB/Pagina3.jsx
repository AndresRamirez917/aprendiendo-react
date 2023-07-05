import React, { useContext } from 'react'
import { Contexto } from "./contextos/Contexto";

const Pagina3= () => {
    const {color}=useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor:color}}>
        Pagina3
    </div>
  )
}

export default Pagina3
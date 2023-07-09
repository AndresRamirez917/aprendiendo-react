import React, { useContext } from 'react'
import { Contexto } from "../contextos/Contexto";

const Pagina1= () => {
    const {color}=useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor:color}}>
        Pagina1
    </div>
  )
}

export default Pagina1
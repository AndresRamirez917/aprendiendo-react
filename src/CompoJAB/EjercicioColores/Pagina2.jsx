import React, { useContext } from 'react'
import { Contexto } from '../contextos/Contexto';

const Pagina2= () => {
    const {color}=useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor:color}}>
        Pagina2
    </div>
  )
}

export default Pagina2
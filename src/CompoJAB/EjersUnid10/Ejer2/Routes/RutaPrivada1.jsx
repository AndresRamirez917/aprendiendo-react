import React, { useContext } from 'react'
import Contexto from '../Context/Contexto'
import { Navigate } from 'react-router-dom'

const RutaPrivada1 = ({children}) => {
    const {logueado} = useContext(Contexto)
  return (logueado)
  ?children
  :<Navigate to='/login'/>
}

export default RutaPrivada1
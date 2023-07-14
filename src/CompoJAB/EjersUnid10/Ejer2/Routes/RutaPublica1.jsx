// import React from 'react'

// const RutaPublica1 = () => {
//   return (
//     <div>RutaPublica</div>
//   )
// }

// export default RutaPublica1
import React, { useContext } from 'react'
import Contexto from '../Context/Contexto'
import { Navigate } from 'react-router-dom'

const RutaPublica1 = ({children}) => {
    const {logueado} = useContext(Contexto)
  return (logueado)
  ?children
  :<Navigate to="/login"/>  
}

export default RutaPublica1
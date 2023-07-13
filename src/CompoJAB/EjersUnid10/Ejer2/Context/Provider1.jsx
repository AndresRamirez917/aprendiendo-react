import React, { useReducer } from 'react'
import Contexto from './Contexto'
import miReducer from './miReducer'
import types from './Types'

const init =()=> {
  const user=localStorage.getItem("valor")
  return{
    logueado:!!user,
    usuario:user
  }
  }

 
const Provider1 = ({children}) => {
const [autenticacion, dispatch] = useReducer(miReducer, {} ,init)

  const logueado=(user)=>{
    const action = {
      type:types.login,
      payload:user
    }
    localStorage.setItem("valor", user)
    dispatch(action)
  }

  const desloguearme=()=>{
    const action = {
      type:types.logout,
      payload:null
    }
    localStorage.removeItem("valor")
    dispatch(action)
  }

    
  return (
    <Contexto.Provider value = {{...autenticacion, logueado, desloguearme}}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider1
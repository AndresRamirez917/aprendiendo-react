import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../Context/Contexto'

const Login = () => {
  const {logueado} = useContext(Contexto)
  const navegacion = useNavigate()
  const loginn = () =>{
    logueado()
    navegacion('/',{replace:true})
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginn}>Login</button>

    </div>
  )
}

export default Login
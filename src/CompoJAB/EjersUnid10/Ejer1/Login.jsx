import React, { Fragment } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Contexto from './Context/Contexto';

const Login = () => {
  const {loguearme} = useContext(Contexto)
  const navegacion = useNavigate();
  const login = () =>{
    navegacion('/', {replace:true})
    loguearme("jav")
  }
 
  return (
    <Fragment>
    <div>
      <h1>Pantalla Login</h1>
      <button onClick={login}>Login</button>
    </div>
    </Fragment>
  )
}

export default Login
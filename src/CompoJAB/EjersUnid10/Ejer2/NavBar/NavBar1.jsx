import React, { Fragment, useContext } from 'react'
//import NavBar from "../Navbar/NavBar"
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../Context/Contexto';

const NavBar1 = () => {
  const {desloguearme} = useContext(Contexto)   
  const navegacion = useNavigate();
  const logoutt = () => {
  navegacion('/login',{replace:true})
  desloguearme();
  
  }

  return (
    <Fragment>
      <div className='styloEjer2Unidad10'>
        <nav>
            <div>
            <NavLink className="activeishon2" to="cp">Capital y Patagonia</NavLink>
            <NavLink className="activeishon2" to="no">Norte y Oeste</NavLink>
            <NavLink className="activeishon2" to="login">Login</NavLink>
            </div>
            <button onClick={logoutt}>Logout</button>
        </nav>
        </div>
    </Fragment>
  )
}

export default NavBar1



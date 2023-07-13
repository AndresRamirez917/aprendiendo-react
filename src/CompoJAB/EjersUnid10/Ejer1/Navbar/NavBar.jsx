import React, { Fragment, useContext } from 'react'
//import NavBar from "../Navbar/NavBar"
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../Context/Contexto';


const NavBar = () => {
const {desloguearme} = useContext(Contexto)   
const navegacion = useNavigate();
const login = () => {
navegacion('/login',{replace:true})
desloguearme();

}
    return (
    <Fragment>
        <nav className='styloEjer1Unidad10'>
            <NavLink to="contenido1">Contenido 1</NavLink>
            <NavLink to="contenido2">Contenido 2</NavLink>
            <NavLink to="contenido3">Contenido 3</NavLink>
            <button onClick={login}>Logout</button>
        </nav>

    </Fragment>
  )
}

export default NavBar
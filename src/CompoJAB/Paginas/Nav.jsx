import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {

  return (
    <nav className='navE-1U-7'>
        <NavLink to="/">Página 1</NavLink>
        <NavLink to="pagina2">Página 2</NavLink>
        <NavLink to="pagina3">Página 3</NavLink>
        <NavLink to="pagina4/G">Página 4</NavLink>
    </nav>
  )
}

export default Nav
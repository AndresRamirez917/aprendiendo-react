import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div>
        <nav>
        <NavLink className="activeishon" to="/">Atanagildo </NavLink>
        <NavLink className="activeishon" to="Ataulfo">Ataulfo</NavLink>
        <NavLink className="activeishon" to="Recesvinto">Recesvinto</NavLink>
        </nav>
    </div>
  )
}

export default Nav2
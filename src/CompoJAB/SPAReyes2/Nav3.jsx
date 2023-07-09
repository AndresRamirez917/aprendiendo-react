import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav3 = ({reyes}) => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reyes/atanagildo">Atanagildo</NavLink>
        <NavLink to="/reyes/ervigio">Ervigio</NavLink>
        <NavLink to="/reyes/sisebuto">Sisebuto</NavLink>
        <NavLink to="/reyes/ataulfo">Ataulfo</NavLink>
        <NavLink to="/reyes/leogivildo">Leogivildo</NavLink>
        <NavLink to="/reyes/recesvinto">Recesvinto</NavLink>
        <NavLink to="/reyes/teodorico">Teodorico</NavLink>
        <NavLink to="/reyes/incognito">Incógnito</NavLink>
    </div>
  )
}

export default Nav3
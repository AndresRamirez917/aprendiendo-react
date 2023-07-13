import React, { Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Contenido1 from '../Contenido1'
import Contenido2 from '../Contenido2'
import Contenido3 from '../Contenido3'
import NavBar from '../Navbar/NavBar'

const Router2 = () => {
  return (
   <Fragment>
    <NavBar/>
    <Routes>
        <Route path="Contenido1" element={<Contenido1/>}/>
        <Route path="Contenido2" element={<Contenido2/>}/>
        <Route path="Contenido3" element={<Contenido3/>}/>
        <Route path="/" element={<Navigate to="Contenido1"/>}/>
    </Routes>
   </Fragment>
  )
}

export default Router2
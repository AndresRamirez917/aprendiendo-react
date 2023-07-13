import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar1 from '../NavBar/NavBar1'
import CP from "../Paginas/CP"
import NO from "../Paginas/NO"


const Route2 = () => {
  return (
  <Fragment>
    <NavBar1/>
    <Routes>
        <Route path="cp" element={<CP/>}/>
        <Route path="no" element={<NO/>}/>
        <Route path="/" element={<Navigate to="cp"/>}/>
    </Routes>
  </Fragment>    
  )
}

export default Route2
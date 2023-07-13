import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Recuperacion from '../Recuperacion'
import Router2 from './Router2'
import RutasPublicas from './RutasPublicas'
import RutasPrivadas from './RutasPrivadas'

const Router = () => {
  return (
  <Fragment>
    <Routes>
        <Route path="login" element={<RutasPublicas><Login/></RutasPublicas>}/>
        <Route path="recuperacion" element={<RutasPublicas><Recuperacion/></RutasPublicas>}/>
        <Route path="/*" element={ <RutasPrivadas><Router2/></RutasPrivadas>}/>
    </Routes>
  </Fragment>    
  )
}

export default Router
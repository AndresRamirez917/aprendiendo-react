import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Paginas/Login'
import Route2 from '../Routes/Route2'
import RutaPrivada1 from './RutaPrivada1'
import RutaPublica1 from './RutaPublica1'



const Route1 = () => {
  return (
  <Fragment>
    <Routes>
        <Route path='login' element={<RutaPublica1><Login/></RutaPublica1>}/>
        <Route path='/*' element={<RutaPrivada1><Route2/></RutaPrivada1>}/>
    </Routes>
  </Fragment>    
  )
}

export default Route1
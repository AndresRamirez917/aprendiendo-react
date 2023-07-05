import React, { useEffect, useState } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink 
} from "react-router-dom";

const RutasNosotros = () => {


  const [datos, setDatos] = useState([])

  React.useEffect(()=>{
    obtenerDatos();
  }, [])

  const obtenerDatos = async () =>{
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const userJson = await users.json()
    setDatos(userJson)
  }

  let i = 10;


  return (
    <div>
      <h1>Ruta Nosotros</h1>
        <ul>
          {
        datos.map(user =>(
          <li key={user.id}>
            <Link to={`/nosotros/${user.id}`}>
            {user.name}
            </Link>
            </li>
        ))
      }
        </ul>
       </div>
    
    
  )
}

export default RutasNosotros
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const RutasListaUsuarios = () => {
    const{id} = useParams()
    const [datos, setDatos] = useState([])

    React.useEffect(()=>{
      const obtenerDatos = async () =>{
        const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const userJson = await users.json()
        setDatos(userJson)
      }
      obtenerDatos();
    }, [id])
  
   
  return (
    <div>
     
        <h1>Datos</h1>
        <h3><span className='text text-success'>Nombre Del Usuario: </span> {datos.name}</h3>
        <p><span className='text text-success fw-bold'>Nickname: </span>{datos.username}</p>
        <p><span className='text text-success fw-bold'>Correo electrónico: </span>{datos.email}</p>
    </div >
  )
}

export default RutasListaUsuarios
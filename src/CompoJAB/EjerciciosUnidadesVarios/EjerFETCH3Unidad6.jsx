import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const EjerFETCH3Unidad6 = () => {
    const[joke, setJoke] = useState([])
    const nextJoke = () => {
        const url = "https://api.chucknorris.io/jokes/random"
        const peticion = fetch(url);
        peticion
        .then(datos => datos.json())
        .then(lectura => 
            setJoke(<div>{lectura.value}</div>))
        .catch(console.log("Se ha producido un errorsh"))
    }
useEffect(()=>{
    nextJoke()
},[])
    
  return (
    <div>
        {joke}
        <button onClick={nextJoke}>Siguiente</button>
    </div>
  )
}

export default EjerFETCH3Unidad6
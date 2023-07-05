import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const EjerFETCH4Unidad6 = () => {
const[joke, setJoke] = useState([])
const otro = () =>{
    const url = "https://api.chucknorris.io/jokes/random"
    const peticion = fetch(url);
    peticion
    .then(datos => datos.json())
    .then(lectura => console.log(lectura))
    .then( lectura =>
    setJoke(<div>{lectura}
    </div>))
}    

useEffect(()=>{
   otro()
},[])
    
  return (
    <div>
        <div className='borderJoke'>
        {joke}
        </div>
    </div>
  )
}

export default EjerFETCH4Unidad6
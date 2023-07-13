import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const EjerFETCH4Unidad6 = () => {
const[chiste, setChiste] = useState([])
const nextJoke = () =>{
    const url = "https://v2.jokeapi.dev/joke/Any?amount=6"
    const peticion = fetch(url);
        peticion
        .then(datos => datos.json())
        .then(lectura =>
          lectura.jokes.map(chistes=>
          setChiste(e=>[...e,<div className='borderJoke' key={chistes.id}>{chistes.setup}  <span className='verde'>{chistes.delivery}</span></div>])))
          .catch(console.log)
    }
    useEffect(()=>{
    nextJoke()
    },[])
    
    return (
    <div>
          {chiste}
    </div>
    )



// const[chiste, setChiste] = useState([])
// const nextJoke = () => {
//     const url = "https://randomuser.me/api/?results=100"
//     const peticion = fetch(url);
//     peticion
//     .then(datos => datos.json())
//     .then(lectura => {
//       lectura.results.map(chistes=>
//       setChiste(e=>[...e,<div className='borderJoke' key={chistes.email}>{chistes.name.first}</div>]))})
//       .catch(console.log)
// }
// useEffect(()=>{
// nextJoke()
// },[])

// return (
// <div>
//       {chiste}
// </div>
// )
}







export default EjerFETCH4Unidad6
import React, { Fragment } from 'react'
import { useState } from 'react'

const AfiReyesUnidad3 = () => {


     const AficionesReyes=[{
      id:0,
        nombre:"Atanagildo",
        aficion:"Comer Pene"
     },

     {
      id:1,
        nombre:"Ataulfo",
        aficion:"Dar Nalga"
     },

     {
      id:2,
        nombre:"Ervigio",
        aficion:"Ser una Sucia"
     },

     {
      id:3,
        nombre:"Sisebuto",
        aficion:"Darle Piquitos a Los Hombres"
     }

     ]
       

     const[mensaje, setMensaje] = useState()
     const[contador, setContador]= useState(0)

     const cambiaMensaje=()=>{
        setContador(contador+1)   
        if(contador+1>=AficionesReyes.length){
            setContador(0)
        }  
        setMensaje(<p>hola <span className='rojo' key={AficionesReyes.id}>{AficionesReyes[contador].nombre}</span> es verdad que te gusta <span className='verde'>{AficionesReyes[contador].aficion}?</span></p>)
        
     }

  return (
    <div className='AfiReyesContainer'>
        <Fragment>
        <button onClick={cambiaMensaje}>Ver Siguiente</button>
        <div>{mensaje}</div>
        </Fragment>
    </div>
  )
}

export default AfiReyesUnidad3
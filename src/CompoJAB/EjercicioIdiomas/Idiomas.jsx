import React, { useContext } from 'react'
import españa from "../images/spain.jpg"
import francia from "../images/francia.png"
import reinoUnido from "../images/uk.png"
import Contextoo from '../contextos/Contextoo'
//import Provid from '../contextos/Provid'

const Idiomas = () => {
  const {setAlumno}=useContext(Contextoo)
  const {alumno}=useContext(Contextoo)
  const sustitucion =(posicion)=>{
    setAlumno(
      alumno.map((dato, indice)=>
        indice===3
        ?{...dato, idioma:posicion}
        :{...dato}
      )
    )
  }

  const cambiar1=()=>{
sustitucion(0)
  }

  const cambiar2=()=>{
 sustitucion(1)
  }

  const cambiar3=()=>{
 sustitucion(2)
  }

  return (
    <div className='idiomas'>
              <div className="bandera" onClick={cambiar1}>
            <img src={españa} alt="" />
        </div>
        
        <div className="bandera" onClick={cambiar2}>
        <img src={francia} alt="" />
        </div>

        <div className="bandera" onClick={cambiar3}>
        <img src={reinoUnido} alt="" />
        </div>
    </div>
  )
}

export default Idiomas
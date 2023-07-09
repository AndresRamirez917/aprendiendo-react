import React from 'react'
import { useParams } from 'react-router-dom'

const Modelo = () => {
 const {rey}=useParams()
 const reyPrimerLetraMayuscula = rey.substring(0,1).toUpperCase() + rey.substring(1)
  return (
    <div className='caja'>
        <img src={`https://www.html6.es/img/rey_${rey}.png`} alt="" />
        {/* <h1>{(rey[0].toUpperCase()+rey.slice(1))}</h1> */}
                               {/* o */}
        <h1>{reyPrimerLetraMayuscula}</h1>
    </div>
  )
}

export default Modelo
import React, { Fragment } from 'react'
import { useState } from 'react'

export const CamDivisasUnidad3 = () => {
     const[monto, setMonto]=useState(0)
    // const[pesoArg, setPesoArg]=useState(0)
    // const[pesoCol, setPesoCol]=useState(0)
    // const[pesoMex, setPesoMex]=useState(0)
    // const[dolar, setdolar]=useState(0)
     const[resultado, setResultado]= useState(0)
    // const mexico = 23.16
    
    const pesoArg = 0
    const pesoCol = 0
    // const pesoMex = 0
    const dolar = 0
   

    const calcularCambio = (e)=>{    
        setResultado(Number(monto)) 
        console.log(typeof(monto))
    }

    const cambiar = (e)=>{
        setMonto(e.target.value)
        console.log(setMonto)
    }

  return (
    <div>Cambio Divisas
        <Fragment>
            <input onChange={cambiar} type="number" />
            <input onChange={calcularCambio} value={pesoArg} type="number" readOnly/>
            <input value={pesoCol} type="number" readOnly/>
            <input value={resultado} type="number" readOnly/>
            <input value={dolar} type="number" readOnly/>
            <button onClick={calcularCambio}>calcular</button>
        </Fragment>
    </div>
  )
}

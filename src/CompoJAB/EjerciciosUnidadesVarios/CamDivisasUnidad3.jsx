import React, { Fragment } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export const CamDivisasUnidad3 = () => {
  const inputMonto=useRef(null)
     const[, setMonto]=useState()
    const[pesoArg, setPesoArg]=useState(0)
    const[pesoCol, setPesoCol]=useState(0)
    const[pesoMex, setPesoMex]=useState(0)
    const[dolar, setDolar]=useState(0)
     const[resultado, setResultado]= useState()

     const calcularCambio = (e)=>{  
      setMonto (e.target.value)
      setResultado(
       setPesoCol((Number(e.target.value*4.573).toFixed(3))),
        setPesoArg(Number(e.target.value*289,11).toFixed(1)),
        setPesoMex(Number(e.target.value*18,79).toFixed(1)),
        setDolar((Number(e.target.value*1.10).toFixed(1)))
        //setPesoCol(Number(4200) * Number(monto)) así lo hice yo
      )
   }

   const borraInput = ()=>{
    const ipts = document.querySelectorAll("input")
    ipts.forEach(element =>{
      element.value=0
      inputMonto.current.focus()
      inputMonto.current.value==0?inputMonto.current.value=(""):null
    })
   }
 
  return (
    <div>Cambio Divisas
        <Fragment>
        <h6>Euros €</h6>
            <input ref={inputMonto} onChange={calcularCambio}  type="number" />
            <h6>Pesos colombianos $</h6>
          <input value={pesoCol} type="number" readOnly/>{resultado} 
            <h6>Pesos Argentinos ₳</h6>
            <input  value={pesoArg}  type="number" readOnly/>{resultado} 
            <h6>Mexican Pesos, Pinche Cabrón ₱</h6>
            <input  value={pesoMex}  type="number" readOnly/>{resultado}
            <h6>Dólares $</h6>
            <input  value={dolar}  type="number" readOnly/>{resultado}
            <button onClick={borraInput}>Borrar</button>
        </Fragment>
    </div>
  )
}

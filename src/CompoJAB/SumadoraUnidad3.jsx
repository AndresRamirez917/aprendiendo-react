import React from 'react'
import { useState } from 'react'

const SumadoraUnidad3 = () => {
  const[num1, setNum1]=useState()
  const[num2, setNum2]=useState()
  const[resultado, setResultado]=useState()

  const sumar = ()=>{
   setResultado(Number(num1)+Number(num2))
  }

  const modificar = (e) =>{
   setNum1(e.target.value)
   
  }

  const modificar1 = (e) =>{
setNum2(e.target.value)
    
  }

  return (
    <div className='cajaSumadora'>
      <input className="inpt" type="number" value={num1} onChange={modificar}/>+
      <input className="inpt" type="number" value={num2} onChange={modificar1}/>=
      <input className="inpt" type="number" readOnly value={resultado}/>
      <button onClick={sumar}>Sumar</button>
    </div>
  )
}

export default SumadoraUnidad3
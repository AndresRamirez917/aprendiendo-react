import React, {useContext} from 'react'
import { Contexto } from '../contextos/Contexto';
const Colores = () => {
  const {setColor} = useContext(Contexto)
  //setColor se importa desde Contexto a través de useContext 
  return (
    <div className='colores'>
        <div className="color" onClick={()=>{
          setColor("#4285f4")}}></div>
        <div className="color" onClick={()=>{
          setColor("#ea4335")}}></div>
        <div className="color" onClick={()=>{
          setColor("#fbbc05")}}></div>
        <div className="color" onClick={()=>{
          setColor("#34a883")}}></div>
    </div>
  )
}

export default Colores
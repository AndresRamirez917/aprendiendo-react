import React, { Fragment, useRef } from 'react';
import imagen0 from "../reyes/rey_atanagildo.png";
import imagen1 from "../reyes/rey_leogivildo.png";
import "../styles.css";

const  EjersUnidad2 = () => {

    const cambio = 23.16;
    const refCaja = useRef()

const incrementar=(e)=>{
e.target.innerHTML=Number(e.target.innerHTML)+1

if(e.target.innerHTML>9){
e.target.innerHTML=1
}

if(e.target.innerHTML>=7){
    e.target.style.backgroundColor="red"
    }
    else{
        e.target.style.backgroundColor="goldenrod"
    }
}


const cambioDivisa=()=>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
}

const cambioImagen=(e)=>{
if(e.target.src.includes("atanagildo")){
e.target.src=imagen1
}else{
    e.target.src=imagen0
}
}

const dataInput = (e) =>{
    refCaja.current.innerHTML = e.target.value
}

return (
    <Fragment>
    <div className='contenedor'>
        <div className="caja">
        <div ref={refCaja}onClick={incrementar}>1</div>
            <button onClick={cambioDivisa}>Aceptar</button>
            <img onClick={cambioImagen} src={imagen0} alt=''/>
            <input onChange={dataInput} type="text" className="dato" />
       
        </div>
        </div>
    </Fragment>
  )
}

export default EjersUnidad2
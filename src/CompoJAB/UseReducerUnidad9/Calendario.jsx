import React, { Fragment } from 'react'
import { useReducer, useState } from 'react';

const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
"julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const opciones = {mesmas:"masM", mesmenos:"menosM", añomas:"masY", añomenos:"menosY"}
// const primerLetraMesMayuscula = meses.substring(0,1).toUpperCase() + meses.substring(1)
const valorInicial ={m:month, a:year};

const reducer = (state, action)=>{
    let nextMonth = state.m;
    let nextYear = state.a;
    switch(action.type){
        case opciones.mesmas:
            nextMonth = nextMonth===11 ? 0 : nextMonth + 1
            break;
        case opciones.mesmenos:
            nextMonth = nextMonth===0 ? 11 : nextMonth - 1
            break;
        case opciones.añomas:
            nextYear = nextYear + action.payload // payload es el valor que aumenta 
            break;                               // o disminuye los años
        case opciones.añomenos:
            nextYear = nextYear - action.payload
            break;
        default:
        }
return {m:nextMonth, a:nextYear}
}

const Calendario = () => {
const[fecha, dispatch]=useReducer(reducer, valorInicial)
const [unidades, setUnidades] = useState(1)

  return (
    <Fragment>
    <div>
        <h1>Calendario</h1>
    <div style={(fecha.m<month && fecha.a<=year) || (fecha.a<year)?{color:"red"} : {color:"green"}}>
        {meses[fecha.m].toUpperCase()} ({fecha.a}) 
   <div>
    Meses: <button onClick={()=>dispatch({type:opciones.mesmas})}>+</button>
    <button onClick={()=>dispatch({type:opciones.mesmenos})}>-</button>
    <div>
    Años: <button onClick={()=>dispatch({type:opciones.añomas, payload:Number(unidades)})}>+</button>
    <button onClick={()=>dispatch({type:opciones.añomenos, payload:Number(unidades)})}>-</button>
    <input type="number" value={unidades} onChange={(e)=>setUnidades(e.target.value)} />
    </div>
   </div>
   </div>
   </div>
    </Fragment>
  )
}

export default Calendario
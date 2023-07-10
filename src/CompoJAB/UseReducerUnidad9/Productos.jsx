import React, { Fragment, useRef } from 'react'
import { useState, useReducer } from 'react'
import "../styles.css"

const types = {
    mas : "mas",
    menos : "menos",
    eliminar: "eliminar",
    comprar: "comprar"
}

const valorinicial = []
const reducer = (state, action)=>{
    switch(action.type){

        case types.menos:
            return state.map(cosa=>
            (action.payload === cosa.id && cosa.cantidad >1)
            ?{...cosa,cantidad:cosa.cantidad - 1}
            :cosa)

        case types.mas:
            return state.map(cosa=>
            (action.payload === cosa.id)
            ? {...cosa,cantidad:cosa.cantidad + 1}
            :cosa)

        case types.eliminar:
            return(state.filter(valor => valor.id !== action.payload))

        case types.comprar:
            return[...state, action.payload]
            default:
            return state;
        
    }
    return state;
}

const Productos = () => {
    const inputName=useRef(null)
    const [lista, dispatch] = useReducer(reducer, valorinicial)
    const [miProducto, setMiProducto] = useState("")

  return (
    <Fragment>

        <h1>Productos</h1>
        <label htmlFor="producto"></label>
        <input className='productoInput' id="producto" type="text" ref={inputName} value={miProducto} onChange={(e)=>setMiProducto(e.target.value)}  />
        <button onClick={() => {
         inputName.current.focus();
         setMiProducto("")   
        // const newId = lista[lista.length-1].id +1;
        dispatch({type: types.comprar, payload: {id: Date.now(), nombre:miProducto, cantidad:1}})
    }}>Añadir Producto</button>
{lista.map((producto)=>
<div key={producto.id}>
Nombre de producto: <span className='verde'>{producto.nombre.substring(0,1).toUpperCase() + producto.nombre.substring(1)}</span> Cantidad = <span className='verde'>{producto.cantidad}</span> unidad/es
        <button onClick={()=>dispatch({type:types.mas, payload:producto.id})}>+</button>
        <button onClick={()=>dispatch({type:types.menos, payload:producto.id})}>-</button>
        <button onClick={()=>dispatch({type:types.eliminar, payload:producto.id})}>x</button>
    </div>
)
}

    </Fragment>
  )
}

{/* {lista.map((producto)=>
<div key={producto.id}>
{producto.nombre} ({producto.cantidad} unidaddes)
<button onClick={()=>dispatch({type:types.menos,payload:producto.id})}>-</button>
<button onClick={()=>dispatch({type:types.mas,payload:producto.id})}>+</button>
<button onClick={()=>dispatch({type:types.eliminar,payload:producto.id})}>x</button>
</div>)} */}

export default Productos
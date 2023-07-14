import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import data from '../Datos/Data'
import Contexto from '../Context/Contexto'
import types from '../Context/Types'

const Comprar = () => {
    const {nombre} = useParams()
    const destinoEncontrado = data.find(dato => dato.nombre===nombre)
    const navegacion = useNavigate()
    const volver = () => {
        navegacion(-1)
    }

    const {dispatch2, contratacion, sumaTotal, setSumaTotal} = useContext(Contexto)
    const encontrado = contratacion.find(e => e.sitio === nombre)
    const contratar = () => {
        setSumaTotal(sumaTotal+destinoEncontrado.precio)
        const action = {
            type:types.contratar,
            payload:{nombre:nombre, precio:destinoEncontrado.precio}
        }
        dispatch2(action)
    }
    

    const anular = () => {
        setSumaTotal(sumaTotal-destinoEncontrado.precio)
        const action = {
            type:types.anular,
            payload:{nombre:nombre}
        }
        dispatch2(action)
    }

    const imagen = `/images/${destinoEncontrado.imagen}`
    if(!destinoEncontrado){
        return <Navigate to='/no'/>
    }

    return (
    <div className='stylesComprar'>
        <h1>{nombre}</h1>
        <div className='servicios'>{destinoEncontrado.servicio}</div>
        <div className='precioo'>{destinoEncontrado.precio}$</div>
        <div className='imagenGrande'><img src={imagen} alt='' /></div>
        {(!encontrado) && <button className=' boton botonContratar' onClick={contratar}>Contratar</button>}
        {(encontrado) &&  <button className=' boton botonAnular' onClick={anular}>Anular</button>}
        <button className=' boton botonVolver' onClick={volver}>volver</button>
    </div>
  )
}

export default Comprar
import React, { useContext } from 'react'
import { Fragment } from 'react'
import Contexto from '../Context/Contexto'
import types from '../Context/Types'
import { Link } from 'react-router-dom'




const MiViaje = () => {
    const {contratacion, dispatch2, referencia, setSumaTotal, sumaTotal} = useContext(Contexto)
  return (
    <Fragment>
        <section className='ruta'>
            <h3>Lugares a visitar</h3>

            {(sumaTotal==0) && <div>
            Todavía no has contratado ningún destino.<br/>
            Haz click en {<Link to={'/cp'}> Capital y Patagonía</Link>}
            o en {<Link to={'/no'}> Norte y Oeste</Link>}
            </div>}
            {contratacion.map(mapa=>
                <div className='grid' key={mapa.sitio}>
                    <button className="boton botonAnularRuta" onClick={
                      ()=>{
                        setSumaTotal(sumaTotal-mapa.precio)
                        dispatch2({
                          type:types.anular,
                          payload:{nombre:mapa.sitio}
                      })
                    }
                    }>Anular</button>
                    {mapa.sitio} ({mapa.precio})
                </div>)}
                <h3>Referencia:{referencia}</h3>
                <h3>Total a pagar:{sumaTotal}$</h3>
        </section>

    </Fragment>
  )
}

export default MiViaje
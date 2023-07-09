import React from 'react'
import { Fragment } from 'react'

const EjerFILTERunidad5 = ({reyes}) => {
    const eliminar =(e)=>{
e.target.parentNode.style.display="none"
    }


        const resultado = reyes.filter(e=>!e.nombre.includes("a") && !e.nombre[0].includes("E")).map(e=>
            <div className="caja"><p>El rey 
                 <span className='rojo' key={e.id}> {e.nombre.toUpperCase()}
                </span > ha comido {e.reinado*e.vacasConsumidas*365} vacas en sus {e.reinado} años de reinado</p>
                <img src={e.imagen} alt=''/>
                <button onClick={eliminar}>Eliminar</button>
            </div>
             )
            
              return (
                <Fragment>
            
            {resultado===0?<div className='FILTERtitulo'>Ninguno de los registros cumple con los parámetros de búsqueda </div>:resultado}
            
                </Fragment>
              )
            }

export default EjerFILTERunidad5
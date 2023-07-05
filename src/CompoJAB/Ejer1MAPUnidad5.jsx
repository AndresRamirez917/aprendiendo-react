import React, { Fragment } from 'react'


const Ejer1MAPUnidad5 = ({reyes}) => {

 const resultado = reyes.map(e=>
<div className="caja"><p>El rey 
     <span className='rojo' key={e.id}> {e.nombre.toUpperCase()}
    </span > ha comido {e.reinado*e.vacasConsumidas*365} vacas en sus {e.reinado} años de reinado</p>
    <img src={e.imagen} alt=''/>
</div>
 )

  return (
    <Fragment>

{resultado}

    </Fragment>
  )
}

export default Ejer1MAPUnidad5
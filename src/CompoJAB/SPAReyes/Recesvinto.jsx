import React from 'react'

const Recesvinto = ({reyes}) => {
const resultado = reyes.filter(e=> e.nombre.includes("Recesvinto")).map(e=> 
<div className='caja'>
  <h1>{e.nombre}</h1>
  <img src={e.imagen} alt="" />
</div>)
  return (
    <div>
      {resultado}
    </div>
  )
}

export default Recesvinto
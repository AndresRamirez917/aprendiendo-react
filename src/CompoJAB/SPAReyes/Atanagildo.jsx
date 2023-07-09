import React from 'react'
import { Fragment } from 'react'

const Atanagildo = ({reyes}) => { 
  const resultado =reyes.filter(e=>e.nombre.includes("Atanagildo")).map(e=> 
  <div className='caja'>
    <h1>{e.nombre}</h1>
  <img src={e.imagen} alt="" />
  </div>)
   return (
<div>
  {/* <h1>
 Atanagildo      
  </h1>
  <img src="http://www.html6.es/img/atanagildo.png" alt="" /> */}
  {resultado }
</div>
   )
 }

export default Atanagildo
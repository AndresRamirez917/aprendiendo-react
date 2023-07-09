import React from 'react'
const EjerFINDUnidad5 = ({reyes}) => {
const resultado = reyes.find(e =>e.nombre.substring(0,1)==="a" || e.nombre.substring(0,1)==="A")
// .map(e=><div>
//   <p>El rey <span key={e.nombre}>{e.nombre} </span>es maricom, observa el rostro de la 
//   homosexulalidad</p>
//   <img src={e.imagen}/>
// </div>
// )


  return (
    <div className='caja'>
      {resultado===undefined?"No se encontró ningún homosexal":resultado.nombre && <div >
      <p>El rey <span key={resultado.id}>{resultado.nombre} </span>es maricom, observa el rostro de la 
   homosexulalidad</p>
        <img className='maricom' src={resultado.imagen} alt=''/></div>}
    </div>
  )
}

export default EjerFINDUnidad5
import React from 'react'

const EjerFILTER2Unid5 = ({reyes}) => {
    const resultado = reyes.filter(e => e.reinado > 10 && e.vacasConsumidas<=10).map(e =><div className="caja">
        <p key={e.id}>
            El rey {e.nombre} ha consumido {e.vacasConsumidas} vacas 
        </p>
        <img className='maricom' src={e.imagen} alt=''/>
    </div>)

  return (
    <div>
       {resultado}
    </div>
  )
}

export default EjerFILTER2Unid5
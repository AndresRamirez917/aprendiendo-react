import React from 'react'

const MedidorTemperatura = () => {
    const temperatura = 21;
  return (
    <div className='container mt-4 mb-4'>
<React.Fragment>
  <h1 className='text text-primary'>Medidor sencillo de temperatura usando ternarios</h1>
        <h1 className='text text-primary'>Hace Calor o Frío?</h1>
      <h2 className='text text-primary'>
        {
            temperatura > 20 ? 'Calor' : 'Frío'
        }
      </h2>
    </React.Fragment>
    </div>
    
  )
}

export default MedidorTemperatura

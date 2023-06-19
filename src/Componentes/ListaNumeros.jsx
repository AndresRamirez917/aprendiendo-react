import React, { useState } from 'react'

const ListaNumeros = () => {
    const [arrayNumero, setNumero] = useState([1,2,3])
    let arrayLength = arrayNumero.length+1;
    const agregaNumero = () => {
        setNumero([...arrayNumero, arrayLength++])
    }
  return (
    
    <div className='container'>
        <React.Fragment>
          <h1 className='text text-danger'>Agregar un elemento a un array usando length y useState</h1>
          <p className='text text-danger'>Haciendo uso del useState se crea un array y luego con una variable se toma el length del array, se le suma 1 y con el 
            setNumero se le agrega el valor de la variable al final del array.
          </p>
        {arrayNumero.map((item, index) => (
                <p key={index}className='text text-danger'>{item}</p>
            ))}
        
      <button className='btn btn-danger' onClick={agregaNumero}>Agregar número</button>
        </React.Fragment>
     
    </div>
  )
}

export default ListaNumeros

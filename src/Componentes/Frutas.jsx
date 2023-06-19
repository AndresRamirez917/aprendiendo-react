import React from 'react'

const Frutas = () => {
    const arrayFrutas = ["🍌", "🍎", "🍍", "🍊"];
  return (
    //React.Fragment permite usar varios elementos en un solo componente
    //entiéndase elemento como la lista y el párrafo, si solo es un elemento
    //se puede usar un div como contenedor
    //la forma abreviada de usar React.Fragment es <>
    <React.Fragment>

        <ul>
          {/* cuando el array es estático y no va a cambiar
          se puede usar el index, si es dinámico yuca */}
          {/* <li key={fruta}>{index + 1} - {fruta}</li> 
          con esta línea se cambia el icono de bolida por n{umero a la lista} */}
          {arrayFrutas.map((fruta, index) => (
            <li key={fruta}>
              {index + 1} - {fruta}
            </li>
          ))}
        </ul>
        <p className='text-primary'>El array de frutas(arrayFrutas)se usa como componente,
        se llama la palabra reservada rafce para crear una estructura en la que se empieza
        a codificar, cuando se van a usar varios elementos en un mismo componente se debe
        de usar la palabra reservada React.Fragment, de otra forma mostrará error, la forma
        abreviada de usar React.Fragment es ◀️▶️ ◀️↗️▶️</p>
        </React.Fragment>
      
  )
}


export default Frutas



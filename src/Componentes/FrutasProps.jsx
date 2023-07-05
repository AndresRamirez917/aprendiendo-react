import React from 'react'

const FrutasProps = (props) => {
  return (
    <React.Fragment>
       <ul>
          {/* cuando el array es estático y no va a cambiar
          se puede usar el index, si es dinámico yuca */}
          {/* <li key={fruta}>{index + 1} - {fruta}</li> 
          con esta línea se cambia el icono de bolida por n{umero a la lista} */}
          {props.ejemploProps.map((fruta, index) => (
            <li key={fruta}>
              {index + 1} - {fruta}
            </li>
          ))}
        </ul>
        <p className='text-primary'>Ejemplo de uso de props llamando únicamente el array de frutas que se encuentra en el archivo App.js; Usando un alias(ejemploProps) para ese array podrá ser llamado usando la notación props.ejemploProps.map para recorrer el array y obtener sus datos, también se uso el uso corto de React.Fragment para este ejemplo.</p>
    </React.Fragment>
  )
}

export default FrutasProps

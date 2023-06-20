import React from 'react'

const EjemploProps = ({sujeto2}) => {
  return (
    <div className='container text text-warning'>
        <>
        <h1>Ejemplo props y comunicación entre componentes</h1>
        <p>EjemploProps, Avatar y Comentario hacen parte de un mismo ejercicio, desde App.jsx cremos un objeto de nombre sujeto y le 
            creamos 3 propiedades, llamamos el componente Comentario para pintarlo, pero creamos una espece de instancia del objeto sujeto 
            para pasarle al componente Comentario las propiedades en los campos que se desee pintar la información del objeto sujeto.
        </p>
        <p>Para efectos de este ejmplo la propiedad imagen se sub dividió en un componente independiente que almacenará la propiedad
            imagen y luego se llamará en el componente Comentario como un prop
        </p>
        <p>
            Por cada objeto que exista se creará un componente con todos sus datos
        </p>
    <h2>Hola {sujeto2.nombre} tu comentario fue {sujeto2.comentario}</h2>
        </>
      
    </div>
  )
}

export default EjemploProps

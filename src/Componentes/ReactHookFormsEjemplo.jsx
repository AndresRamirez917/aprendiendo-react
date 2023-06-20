import React from 'react'
import {useForm} from "react-hook-form"
import { useState } from 'react';

const ReactHookFormsEjemplo = () => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const [datos, setDatos] = useState([])
    //obligatorio para usar hook-form
    const onSubmit = (data, e) => {
      setDatos  ([...datos, data])
        console.log(data);
        e.target.reset() 
    }
   
  return (
    <div className='container text text-black'>
        <>
        <h1>Ejemplo del uso de React Hook Form</h1>
        <p>Para usar react hook form se debe de instalar el paquete, luego usar register, handleSubmit, formState:  errors  = useForm(), 
        importar el useForm. Luego se crea el form que contendra los inputs, al form se le pasa la función onSubmit que almacenará el 
        parámetro handleSubmit como función y se le pasará como parámetro onSubmit, al crear el input, al parámetro register se convertira
        en un REST, se le pasará el nombre con el que se va a identificar el input, y dentro de este como un objeto se le pasarán las
        propiedades a validar, aria-invalid y otros procesos hay que estudiarlos para entenderlos mejor</p>
        {/* //obligatorio para usar hook-form */}
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input
        id="name"
        aria-invalid={errors.name ? "true" : "false"}
        {...register("name", { required: true, maxLength: 5 })}
      />
<br />
            <input
        id="apellido"
        aria-invalid={errors.apellido ? "true" : "false"}
        {...register("apellido", { required: true, maxLength: 5 })}
      /> */}

      {/* use role="alert" to announce the error message */}
      {/* {errors.name &&  && errors.name.type  === "required" && (
        <span role="alert"><br />Este campo es obligatorio</span>
      )}
      {errors.name && errors.apellido && errors.name.type && errors.apellido.type === "maxLength" && (
        <span role="alert"><br />Máximo 5 caracteres</span>
      )}

      
<br />
      <input type="submit" />
            </form> */}


<form onSubmit={handleSubmit(onSubmit)}>
    
    <input
    {...register("titulo", {
      required: {value:true, message:"Campo obligatorio"},
      minLength:{value:5, message:"Míximo 5 caracteres"}
    })
   
  } 
  />
  <br />
     {errors.titulo &&
        <span className='text-danger'>{errors.titulo.message}</span>
        }

<br />
<button className="btn btn-dark" >Enviar</button>

</form>





        </>
    </div>
  )
}

export default ReactHookFormsEjemplo

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const EjemploHookForm1 = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const [entradas, setEntradas] = useState([])

  const onSubmit = (data,e) => {
    console.log(data)
    setEntradas([...entradas, data])
    console.log(entradas)
    e.target.reset();


  }
  return (
    <div className='container text text-danger'>
        <>
        <h1>Ejemplo Hook form 1</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

        <input 
        type="text" 
     
        placeholder="Título" 
        className='form-control my-2'
        {...register("titulo", {
            required: {value:true, message:"Campo obligatorio"},
            minLength:{value:2, message:"Mínimo 2 caracteres"}
          })
         
        } 
        ></input>

        {errors.titulo &&
        <span className='text-danger'>{errors.titulo.message}</span>
        }
        

        <input 
        type="text" 
      
        placeholder="Descripción" 
        className='form-control my-2'
        {...register("descripcion", {
            required: {value:true, message:"Campo obligatorio"},
            maxLength:{value:30, message:"Máximo 20 caracteres"}
          })
         
        } 
        ></input>

        {errors.descripcion &&
        <span className='text-danger'>{errors.descripcion.message}</span>
        }
<br />
    <button className='btn btn-danger'>Enviar</button>

        </form>
<ul>
  {
    entradas.map(entrada => (
      <li key={entrada.id}>
        {entrada.titulo} - {entrada.descripcion}
      </li>
    ))
  }
</ul>
        
        </>
    </div>
  )
}

export default EjemploHookForm1

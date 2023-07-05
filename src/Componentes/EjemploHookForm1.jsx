import { useState } from "react";
import { useForm } from "react-hook-form";

import React from "react";

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
        <React.Fragment>
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
        
        </React.Fragment>
    </div>
  )
}
export default EjemploHookForm1


// const { register, formState: { errors }, watch, handleSubmit } = useForm({
//   defaultValues: {
//       nombre: 'Luis',
//       direccion: 'Calle Gran Vía'
//   }
// });

// const onSubmit = (data) => {
//   console.log(data);
// }

// const incluirTelefono = watch('incluirTelefono');

// return <div>
//   <h2>Formulario</h2>
//   <p>Nombre: {watch('nombre')}</p>
//   <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//           <label>Nombre</label>
//           <input type="text" {...register('nombre', {
//               required: {value:true, message:"Campo obligatorio"},
//               maxLength:{value:30, message:"Máximo 20 caracteres"}
//           })} />
      
//           {errors.nombre && <span className='text-danger'>{errors.nombre.message}</span>}
//           {errors.nombre && <span className='text-danger'>{errors.nombre.message}</span>}
//       </div>
//       <div>
//           <label>Dirección</label>
//           <input type="text" {...register('direccion', {
//               required: {value:true, message:"Campo obligatorio"},
//               maxLength:{value:30, message:"Máximo 20 caracteres"}
//           })} />
//       </div>
//       <div>
//           <label>Email</label>
//           <input type="text" {...register('email', {
//               pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
//           })} />
//           {errors.email.type === 'pattern' && <p>El formato del email es incorrecto</p>}
//       </div>
//       <div>
//           <label>Edad</label>
//           <input type="text" {...register('edad', {
//               required: {value:true, message:"Campo obligatorio"},
//               maxLength:{value:30, message:"Máximo 20 caracteres"}
//           })} />
//           {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
//       </div>
//       <div>
//           <label>País</label>
//           <select {...register('pais')}>
//               <option value="es">España</option>
//               <option value="it">Italia</option>
//               <option value="fr">Francia</option>
//           </select>
//       </div>
//       <div>
//           <label>¿Incluir teléfono?</label>
//           <input type="checkbox" {...register('incluirTelefono')} />
//       </div>
//       {incluirTelefono && (
//           <div>
//               <label>Teléfono</label>
//               <input type="text" {...register('telefono')} />
//           </div>
//       )}
//       <input type="submit" value="Enviar" />
//   </form>
// </div>




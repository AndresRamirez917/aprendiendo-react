import React from 'react'
import { useForm } from 'react-hook-form'
// import {v4 as uuidv4} from 'uuid'


const AddUserForm = (props) => {

    // const usersData = [
    //     { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    //     { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    //     { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    //   ]


    const { register, handleSubmit, formState: {errors} } = useForm()
        const onSubmit = (data, e) => {
            e.preventDefault(); 
             props.addUser(data)
             console.log(data)
             e.target.reset()
        }

  return (
  
        <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input 
        type="text" 
     
        placeholder="Nombre" 
        className='form-control my-2'
        {...register("name", {
            required: {value:true, message:"Campo obligatorio"},
            minLength:{value:2, message:"Mínimo 2 caracteres"}
          }) 
        } 
        ></input>
        {errors.name &&
        <span className='text-danger'>{errors.name.message}</span>
        }
      <label>Username</label>
      <input 
        type="text" 
     
        placeholder="Username" 
        className='form-control my-2'
        {...register("username", {
            required: {value:true, message:"Campo obligatorio"},
            minLength:{value:2, message:"Mínimo 2 caracteres"}
          })
         
        } 
        ></input>

        {errors.username &&
        <span className='text-danger'>{errors.username.message}</span>
        }
      <button>Add new user</button>
    </form>
        
        </React.Fragment>
      
  
  )
}

export default AddUserForm

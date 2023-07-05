import React from 'react'
import { useForm } from 'react-hook-form'



const EditUserForm = (props) => {

 
 
    console.log(props)
    const { register, handleSubmit, formState: {errors}, setValue} = useForm({
        defaultValues: props.currentUsert
    });

    setValue('name', props.currentUsert.name)
    setValue('username', props.currentUsert.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        e.preventDefault(); 
        // props.updateUser(props.currentUser.id)
        props.updateUser(props.currentUser.id, data)
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
  <button>Editar usuario</button>
  <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
</form>
    
    </React.Fragment>
  

)
}

export default EditUserForm

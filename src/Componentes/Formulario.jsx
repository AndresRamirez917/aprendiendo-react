import React from 'react'

const Formulario = () => {
    let nombre;
    let edad;
    let email;
    
    const mensaje =function(e){
        e.preventDefault();
       
        if(nombre || edad || email ===""){
            alert("Todos los campos son obligatorios");
        }else{
            alert("Datos enviados correctamente");
            alert(nombre + " " + edad + " " + email);
        }
    }

  return (
    <div className='container mt-4 mb-4'>
        <React.Fragment>
            <h1 className='text text-success'>Ejemplo sencillo de formulario</h1>
            <p className='text text-success'>Creación de un formulario con inputs que deberían tomar datos, valilarlos y enviar sus respectivas alertas
                pero no pude hacerlo funcionar
            </p>
        <form action="" className='text text-success'>
            Nombre <input type="text" name="name" placeholder='Nombre' content={nombre}/>
            Edad <input type="text" name="edad" placeholder='Edad' />
            Email <input type="email" name="email" placeholder='Email'/>
            <button className='btConfirm btn btn-success' onClick={mensaje}>Confirmar</button>
        </form>
        </React.Fragment>
        
    
      
    </div>
  )
}

export default Formulario

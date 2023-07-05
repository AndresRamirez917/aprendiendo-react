import React from 'react'
import UserTable from '../UserTable'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'


const AppCrud = () => {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
      ]
    
      //Agregar usuarios
      const [users, setUsers] = useState(usersData)
      const addUser =(user)=>{
        user.id=uuidv4();
        setUsers([...users , user])
      }

     


      //Eliminar usuarios
        const deleteUser=(id)=>{
        console.log(id)
        setUsers(users.filter(user=>user.id!==id))
      }

      //Cambiar entre formulario agregar y editar
      const [editing, setEditingUser] = useState(false)
    

      const initialFormState = { id: null, name: '', username: '' }
      const [currentUsert, setCurrentUSer] = useState(initialFormState)

    //   useEffect(() => {
    //     setMessage("Enter your message")
    //   },[])

      

      const editRow = (user) => {
        setEditingUser(true)
        setCurrentUSer({ id: user.id, name: user.name, username: user.username })  
      }

      const updateUser = (id, updatedUser)=>{
        setEditingUser(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
      }

  return (
  

    <div className="container">
        <React.Fragment>
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

            {
                editing ? (
                    <div>
                        <h2>Editar Usuario</h2>
                        <EditUserForm 
                        setEditing={setEditingUser}
                        currentUsert={currentUsert}
                        updateUser={updateUser}/>
                    </div>
                ) : (
                    <div>
                        <h2>Agregar Usuario</h2>
                        {/* envío estos datos como props al formulario*/}
                        <AddUserForm addUser={addUser}/> 
                    </div>
                )
            }

          
        
        </div>
        <div className="flex-large">
          <h2>Lista de usuarios</h2>
          <UserTable users={users}
           deleteUser={deleteUser} 
           editRow={editRow}/>
        </div>
      </div>
      </React.Fragment>
    </div>
  )
}
  
// setEditing={setEditing}
// currentUser={currentUser}
// updateUser={updateUser}


export default AppCrud

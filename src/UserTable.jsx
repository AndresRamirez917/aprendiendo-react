import React from 'react'


const UserTable = (props) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
                        {/* if */}
             {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>
          <button 
          className="button muted-button"
          onClick={()=>{props.editRow(user)}}
         >Edit
          </button>

          <button 
          className="button muted-button"
          onClick={(e)=>{props.deleteUser(user.id)}}>Delete
          </button>
        </td>
      </tr>
            ))
            //else
            ):(
                <tr>
                <td colSpan={3}>No existen usuarios</td>
              </tr>
            )
              
            
        }
      
    </tbody>
  </table>
  )
}

export default UserTable

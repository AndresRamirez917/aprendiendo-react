import React from 'react'
                //=props
const Avatar = ({urlImagen}) => {
  return (

        <React.Fragment>
        <img src={urlImagen} alt="avatar" className='mr-3' />
        </React.Fragment>

  )
}

export default Avatar

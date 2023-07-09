
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
 const lista = ["atanagildo", "ervigio", "sisebuto", "ataulfo", "leogivildo", "recesvinto", "incongnito"]
// let resultado;
return (
    <div>
        {
            lista.map(unRey=>
                <Link to={`/${unRey}`}>
                    <img src={`https://www.html6.es/rey${unRey}.png`} alt="" />
                </Link>)
        }
    </div>
  )
}

export default Home
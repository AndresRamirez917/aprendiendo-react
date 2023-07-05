//6. Pasamos como props cada uno de los elementos del objeto que enviamos desde el App
//7. Creamos el template de la card con los props como valores a recibir
//8. Dentro del botón (comprar) a través del evento onClick creamos una función que
//   cuando se haga click la card desaparezca y a la vez una función de flecha que 
//   usará el setTotal(sumaPrecios) para ir sumando el precio de cada una de las cards
//   y enviar ese dato a la etiqueta h1 que se encuentra en el archivo App, es decir, 
//   al estar vinculados estos archivos se puede intercambiar informaición entre ellos
import React, { Fragment } from "react";

//                      paso 6
const EjerUnidad4 = ({id, nombre, imagen, precio, color, sumaPrecios}) => {

//                      paso 8                        
  const ocultaCard = (e)=>{
     e.target.parentNode.style.display="none"
    sumaPrecios((e)=>e+precio)
  }

  return (
 <Fragment> 
  {/*                   paso 7 */}
  <div className="caja" style={{backgroundColor:color}}>
         <h1 className="nombre" key={id}>{nombre}</h1>
         <img src={imagen} alt="" />
         <h3 className="precio">{precio}</h3>
         <button onClick={ocultaCard}>Comprar</button>
         </div>
   </Fragment>
  );
};

export default EjerUnidad4;

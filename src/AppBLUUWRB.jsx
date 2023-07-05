import React from "react";
import Contador2 from "./Componentes/Contador2";
import Formulario from "./Componentes/Formulario";
import MedidorTemperatura from "./Componentes/MedidorTemperatura";
import ListaNumeros from "./Componentes/ListaNumeros";
import AumentaElementosArray from "./Componentes/AumentaElementosArray";
import FormularioReactivo from "./Componentes/FormularioReactivo";
// import ReactHookFormsEjemplo from "./Componentes/ReactHookFormsEjemplo";
import EjemploHookForm1 from "./Componentes/EjemploHookForm1";

import EjemploProps from "./Componentes/EjemploProps";
import Comentario from "./Componentes/Comentario";
// import AppCrud from "./Componentes/AppCrud";

import{
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
   NavLink 
} from "react-router-dom";
import RutasContacto from "./Componentes/RutasContacto";
import RutasNosotros from "./Componentes/RutasNosotros";
import RutasListaUsuarios from "./Componentes/RutasListaUsuarios";
import ReduxPokemones from "./Componentes/ReduxPokemones";
import { Provider } from "react-redux";
import generateStore from "./Redux/ReduxStore";


const App = () => {
   const sujeto = {
      nombre:"Andrés",
      urlImagen:"https://placehold.co/64", 
      comentario:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cupiditate."
   }

   const sujeto2 = {
      nombre: "Carolina",
      urlImagen:"https://placehold.co/64",
      comentario:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
   }  

   const sujeto3 = {
      nombre: "Neko",
      urlImagen:"https://placehold.co/64",
      comentario:"Soy el gato mas chimbita."
   } 


   return (
     <div>


  //  const store = generateStore()
      
{/* <Provider store={store}>
<ReduxPokemones />
</Provider> */}
     

       <Router>
         <div className="container">
           <h1>Ejemplo uso de rutas</h1>
           <hr />
           <ul>
            <li><NavLink to="/" exact className="btn btn-primary mb-2" acttiveClassName="active" >link Home</NavLink></li>
            <li><Link to="/contacto" className="btn btn-success mb-2">link contacto</Link></li>
            <li><Link to="/nosotros" className="btn btn-warning">link nosotros</Link></li>
           </ul>
           <Routes>      
           <Route path="/contacto" Component={RutasContacto}></Route>
           <Route path="/nosotros" Component={RutasNosotros}></Route>
           <Route path="/nosotros/:id" Component={RutasListaUsuarios}></Route>
           </Routes>         
         </div>
       </Router>

       {/* <AppCrud/> */}

<EjemploHookForm1 /> 
<hr></hr>


{/* <ReactHookFormsEjemplo /> 
 <hr></hr> */}



<hr></hr>   
<EjemploProps sujeto2={sujeto2} />
<Comentario sujeto={sujeto3}/>
<Comentario sujeto={sujeto2}/>
<Comentario sujeto={sujeto}/>
<hr></hr>    

 {/* <Formulario /> 
 <hr></hr>


 <MedidorTemperatura />  
 <hr></hr>


 <ListaNumeros />
 <hr></hr>


 <AumentaElementosArray />  
 <hr></hr>


 <FormularioReactivo />
 <hr />


 <Contador2 /> */}




     </div>
   );
};

export default App;

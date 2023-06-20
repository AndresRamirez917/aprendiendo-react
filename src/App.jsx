import React from "react";
import Contador2 from "./Componentes/Contador2";
import Formulario from "./Componentes/Formulario";
import MedidorTemperatura from "./Componentes/MedidorTemperatura";
import ListaNumeros from "./Componentes/ListaNumeros";
import AumentaElementosArray from "./Componentes/AumentaElementosArray";
import FormularioReactivo from "./Componentes/FormularioReactivo";
import ReactHookFormsEjemplo from "./Componentes/ReactHookFormsEjemplo";
import EjemploHookForm1 from "./Componentes/EjemploHookForm1";

import EjemploProps from "./Componentes/EjemploProps";
import Comentario from "./Componentes/Comentario";

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
<EjemploProps sujeto2={sujeto2} />
<Comentario sujeto={sujeto3}/>
<Comentario sujeto={sujeto2}/>
<Comentario sujeto={sujeto}/>
<hr></hr>    
<EjemploHookForm1 /> 
<hr></hr>
<ReactHookFormsEjemplo /> 
 <hr></hr>
 <Formulario /> 
 <hr></hr>
 <MedidorTemperatura />  
 <hr></hr>
 <ListaNumeros />
 <hr></hr>
 <AumentaElementosArray />  
 <hr></hr>
 <FormularioReactivo />
 <hr></hr>
 <Contador2 />
    </div>
  );
};

export default App;

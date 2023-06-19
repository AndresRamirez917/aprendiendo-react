import React from "react";
import Contador2 from "./Componentes/Contador2";
import Formulario from "./Componentes/Formulario";
import MedidorTemperatura from "./Componentes/MedidorTemperatura";
import ListaNumeros from "./Componentes/ListaNumeros";
import AumentaElementosArray from "./Componentes/AumentaElementosArray";
import FormularioReactivo from "./Componentes/FormularioReactivo";
import ReactHookFormsEjemplo from "./Componentes/ReactHookFormsEjemplo";

const App = () => {
   return (
    <div>

 <Contador2 />
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
 <ReactHookFormsEjemplo /> 
    </div>
  );
};

export default App;

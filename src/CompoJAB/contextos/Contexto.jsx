import React ,{ createContext } from "react";
import { useState } from "react";

// createContext permite el uso de color o setColor desde donde
// necesite ser llamado, en este ejemplo se llama en Colores para 
// usarlo como setColor y en página para usarlo como color
export const Contexto = createContext();

// función que se exporta, encierra los componentes en la App,
// para que los hijos tengan acceso al cambio de color
export const Datos = ({children}) =>{
    const[color,setColor] = useState(["gold"])
        return(
            <Contexto.Provider value={{color,setColor}}>
                {children}
            </Contexto.Provider>
        )
    
}
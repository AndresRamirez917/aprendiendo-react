//No importa el ordén pero para efectos de este ejemplo (EjerUnidad4) lo voy a poner asi
//1. creación del array de objetos que contiene los datos de los reyes.
//2. Creamos en este archivo el useState que permitirá la suma de los valores
//3. se envián los datos que se van a pintar en el componente OJO dentro del mismo
//   componente, incluído el setState con un alias(sumaPrecios), el cálculo será enviado 
//   desde el componente y se pintara en la etiqueta h1 que esta recibiendo el primer 
//   parámetro del useState, osea total
//4. La etiqueta que va a servir como contenedor de las cards se crea aquí y no en 
//   el archivo del componente, para evitar que se pinte por cada card que exista
//5. La etiqueta que va a guardar la suma de todos los botones se ubica fuera del
//   contenedor para que siempre se muestre al principio de la aplicación 

import React from "react";
import { useState } from "react";
import EjerReyesUnid1 from "./CompoJAB/EjerReyesUnid1";
import EjersUnidad2 from "./CompoJAB/EjersUnidad2";
import SumadoraUnidad3 from "./CompoJAB/SumadoraUnidad3";
import AfiReyesUnidad3 from "./CompoJAB/AfiReyesUnidad3";
import { CamDivisasUnidad3 } from "./CompoJAB/CamDivisasUnidad3";
import EjerUnidad4 from "./CompoJAB/EjerUnidad4";
import { Fragment } from "react";
import "./CompoJAB/styles.css"
import Ejer1MAPUnidad5 from "./CompoJAB/Ejer1MAPUnidad5";
import EjerFILTERunidad5 from "./CompoJAB/EjerFILTERunidad5";
import EjerFINDUnidad5 from "./CompoJAB/EjerFINDUnidad5";
import EjerFILTER2Unid5 from "./CompoJAB/EjerFILTER2Unid5";
import EjerFETCHunidad6 from "./CompoJAB/EjerFETCHunidad6";
import EjerFETCH2Unidad6 from "./CompoJAB/EjerFETCH2Unidad6";
import EjerFETCH3Unidad6 from "./CompoJAB/EjerFETCH3Unidad6";
import EjerFETCH4Unidad6 from "./CompoJAB/EjerFETCH4Unidad6";

// mismo ejercicio
import Pagina1 from "./CompoJAB/Pagina1";
import Pagina2 from "./CompoJAB/Pagina2";
import Pagina3 from "./CompoJAB/Pagina3";
import Colores from "./CompoJAB/Colores";
import { Datos } from "./CompoJAB/contextos/Contexto";
// mismo ejercicio

// mismo ejercicio
import Idiomas from "./CompoJAB/Idiomas";
import Pagina from "./CompoJAB/Pagina"
import Provid  from "./CompoJAB/contextos/Provid";
// mismo ejercicio

import A from "./CompoJAB/Paginas/A";
import B from "./CompoJAB/Paginas/B";
import C from "./CompoJAB/Paginas/C";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Error404 from "./CompoJAB/Paginas/Error404";

const App = () =>{
    
//                                  paso 2
const[total, setTotal] = useState(0)

//                                  paso 1
    const datosReyes=[{
        id: 0,
        nombre:"Atanagildo",
        imagen:"http://www.html6.es/img/atanagildo.png", 
        precio:200,
        color:"white",
        reinado:15,
        vacasConsumidas: 10
},
{
    id: 1,
    nombre:"Ataulfo",
    imagen:"http://www.html6.es/img/ervigio.png",
    precio:85,
    color:"green",
    reinado:15,
    vacasConsumidas:12
},
{
    id: 2,
    nombre:"Recesvinto",
    imagen:"http://www.html6.es/img/recesvinto.png", 
    precio:250,
    color:"pink",
    reinado:15,
    vacasConsumidas: 20
},
{
    id: 3,
    nombre:"Ervigio",
    imagen:"http://www.html6.es/img/ervigio.png", 
    precio:75,
    color:"yellow",
    reinado:15,
    vacasConsumidas: 35
},
{
    id: 4,
nombre:"Leogivildo",
imagen:"http://www.html6.es/img/leogivildo.png",
precio:50,
color:"black",
reinado:15,
vacasConsumidas: 5
},
{
    id: 5,
nombre:"Teodorico",
imagen:"http://www.html6.es/img/teodorico.png", 
precio:65,
color:"red",
reinado:15,
vacasConsumidas: 9
}]
    return(
        <Fragment>

            <div>
                <BrowserRouter>
                <Routes>
                    {/* página por defecto-+- */}
                    <Route path="/" element={<A/>}></Route>
                    <Route path="/pagina2" element={<B/>}></Route>
                    <Route path="/pagina3" element={<C/>}></Route>
                    {/* sino encuentra ninguna de las otras páginas entonces error */}
                    <Route path="*" element={<Error404/>}></Route>
                </Routes>
                </BrowserRouter>
            </div>

            <Provid>
            <div className="banderas">
                <Idiomas />
            </div>
            <div className="contenido">
            <Pagina />
            </div>
            </Provid>

            {/* mismo ejercicio */}
            <Datos> {/* función desde Contexto permite hijos acceder useState color,Setcolor*/}  
            <div className="contextStyles">
                <Pagina1 />
                <Pagina2 />  {/* componentes que comparten el Contexto*/}
                <Pagina3 />
            </div>
            <Colores />  {/* componente con los botones para cambiar color de Pag1-3 */}
            </Datos>
            {/* mismo ejercicio */}
            <h1>Manejo de context, y su vinculación con las Paginas a traves de su exportación para llamar color y setColor para cambiar de color el fondo de las mismas, creación de la función Datos que usa la propiedad children para así permitirle su uso a todos componentes de la App, en este caso
                    Pagina1-3 y Colores que son los hijos de la función Datos
            </h1>

            <div>
                <EjerFETCH4Unidad6 />
                <h1>No pude hacerlo funcionar <span role="img" aria-label="">👆</span></h1>
            </div>

            <div>
                <EjerFETCH3Unidad6 />
                <h1>Uso de fetch, uso del hook useEffect para evitar re-renderizado de elementos, en este ejemplo el useEffect será usado para almacenar únicamente el llamado de la función de siguiente chiste y el codigo de la función estará fuera del useEffect y tendrá en su interior el fetch y demás código -MEJOR VER CÓDIGO- y acceso a las propiedades del array para ubicar el elemento que se quiere pintar</h1>
            </div>

            <div>
                <EjerFETCH2Unidad6 />
                <h1>Uso de fetch, uso del hook useEffect para evitar re-renderizado de elementos, recorrido de array con .map por que hay que pintar varios elementos, uso de spread operator para evitar que los elementos se
                sobre escriban y solo mostrara el último.
                </h1>
            </div>

            <div>
                <EjerFETCHunidad6 />
                <h1>Uso de fetch, pintado de datos usando template strings por ser un solo elemento</h1>
            </div>

            <div className="FilterContainer2">
                <EjerFILTER2Unid5 reyes={datosReyes}/>
                <h1>Envío de datos desde el componente y ejemplo uso filter combinado con .map</h1>
            </div>

            <div className="FindContainer">
                <EjerFINDUnidad5 reyes={datosReyes}/>
                <h1>Envío de datos desde el componente, ejemplo uso .find sin .map y uso operador terciario y pintado de div dentro de resultado</h1>
            </div>

            <div className="FilterContainer">
                <EjerFILTERunidad5 reyes={datosReyes}/>
                <h1>Envío de datos desde el componente y ejemplo uso filter y .map para el pintado de los datos</h1>
            </div>

            <div className="unidad5Container">
            <Ejer1MAPUnidad5 reyes={datosReyes}/>
            <h1>Envío de datos desde el componente y ejemplo uso .map</h1>
            </div>
            
            {/*                 paso 4 y 5 */}
            <h1>Costo Total ${total}</h1>
            <div className="appContainer"> 
            {/*                 paso 3 */}
                <EjerUnidad4 id = {datosReyes[0].id}nombre = {datosReyes[0].nombre} imagen={datosReyes[0].imagen} precio= {datosReyes[0].precio} color={datosReyes[0].color} sumaPrecios={setTotal}/>
                <EjerUnidad4 id = {datosReyes[1].id}nombre = {datosReyes[1].nombre} imagen={datosReyes[1].imagen} precio= {datosReyes[1].precio} color={datosReyes[1].color} sumaPrecios={setTotal}/>
                <EjerUnidad4 id = {datosReyes[2].id}nombre = {datosReyes[2].nombre} imagen={datosReyes[2].imagen} precio= {datosReyes[2].precio} color={datosReyes[2].color} sumaPrecios={setTotal}/>
                <EjerUnidad4 id = {datosReyes[3].id}nombre = {datosReyes[3].nombre} imagen={datosReyes[3].imagen} precio= {datosReyes[3].precio} color={datosReyes[3].color} sumaPrecios={setTotal}/>
                <EjerUnidad4 id = {datosReyes[4].id}nombre = {datosReyes[4].nombre} imagen={datosReyes[4].imagen} precio= {datosReyes[4].precio} color={datosReyes[4].color} sumaPrecios={setTotal}/>
                <EjerUnidad4 id = {datosReyes[5].id}nombre = {datosReyes[5].nombre} imagen={datosReyes[5].imagen} precio= {datosReyes[5].precio} color={datosReyes[5].color} sumaPrecios={setTotal}/>
                <h1>Envío de datos de un array de objetos desde la importación del componente, uso de props, inline style, función flecha dentro de una función flecha</h1>
            </div>
            
            <div className="divisaStyle">
            <CamDivisasUnidad3 />
            </div>

            <div className="afiReyesStyles">
            <AfiReyesUnidad3 />
            <h1>Uso hook useState(), array de objetos y recorrido de array sin usar bucles <span role="img">gonorrea</span></h1>
            </div>  

            <div className="sumadorStyles">
            <SumadoraUnidad3 />
            <h1>Uso de hook useState() y e.target.value para inputs</h1>
            </div>

            <div className="ejerReyesUnid1Styles">
            <EjerReyesUnid1/>
            <h1>Uso de constantes, e.target, .includes y condicionales if</h1>
            </div>  

            <div className="ejerUnidad2Styles">
            <EjersUnidad2 />
            <h1>Uso de Number, e.target.style, hook useRef(), y evento onClick</h1>
            </div>        
        </Fragment>
    )
}

export default App;
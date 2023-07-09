import React from "react"
import imagen0 from "../reyes/rey_atanagildo.png"
import imagen1 from "../reyes/rey_leogivildo.png"
import imagen2 from "../reyes/rey_sisebuto.png"
import anonimous from "../reyes/rey_incognito.png"
import "../styles.css"

const EjerReyesUnid1 = () => {
    const name0 = "Atanagildo";
    const name1 = "Leogivildo";
    const name2 = "Sisebuto";


    const cambiaTexto=(e)=>{
       if(e.target.innerHTML==="Visto"){
        e.target.innerHTML=""
       }else{
        e.target.innerHTML="Visto"
       }
} 

const cambiarImagen=(e)=>{
   if(e.target.src.includes("atanagildo") || e.target.src.includes("leogivildo") || e.target.src.includes("sisebuto")){
e.target.src=anonimous
   }else{
    e.target.style.visibility="hidden"
   }
   e.target.parentNode.style.backgroundColor="white"
}
    


  return (
    <React.Fragment>
        <div className="contenedor">
    <div className='caja'>
        <img  onClick={cambiarImagen} src={imagen0} alt=""/>
        <h1 onClick={cambiaTexto}>{name0}</h1>
    </div>

    <div className='caja'>
        <img onClick={cambiarImagen} src={imagen1} alt=""/>
        <h1 onClick={cambiaTexto}>{name1}</h1>
    </div>

    <div className='caja'>
        <img onClick={cambiarImagen} src={imagen2} alt=""/>
        <h1 onClick={cambiaTexto}>{name2}</h1>
    </div>
    </div>
    </React.Fragment>
  )
}

export default EjerReyesUnid1
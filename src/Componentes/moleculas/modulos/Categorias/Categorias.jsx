import React, { useState } from 'react'
import icono from "../../../Atomos/img/Group 386.svg"
import icono2 from "../../../Atomos/img/plus.svg"
import "./Categorias.css"

const Categorias = () => {

  const [Open, SetOpen] =useState(false)
 const [openMenu, SetOpenMenu] = useState("false")



  return (
    <div className='categorias-contenedor'>
      

      <div className='categoria-Exit'>
        <p>EXIT <img src={icono} alt="" /></p>
      </div>
      <div className='categoria-contenido-categorias'>
        <div className='categorias-items'>
            <h3>PRODUCTS <img src={icono2} alt="" /></h3>
           

        </div>
        
      </div>
    </div>
  )
}

export default Categorias
//  <div className={`categorias ${OpenMenu ? "open" :""}`}><Categorias ></Categorias></div> 
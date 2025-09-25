import React from 'react'
import "../GuiaRegalos/GuiaRegalos.css";
import imagenportada from "../../Atomos/img/Component 44.svg"
import imagenRegalo1 from "../../Atomos/img/Rectangle 34.svg"
import imagenRegalo2 from "../../Atomos/img/Rectangle 89.svg"

const Guiaregalos = () => {
  return (
    <div className='guia-contenedor'>
      <img src={imagenportada} className='guia-img-portada'/>
      <div className="guia-contenedor-desta">
        
        <div className='guia-articulo'>
            <img src={imagenRegalo1} alt="" className='guia-articulo-img'/>
            <div className='guia-texto'>
               <h2>Anillo Zincornia Verde</h2>
               <button>VER SHOP</button>
            </div>
        </div>
        <div className='guia-articulo'>
            <img src={imagenRegalo2} alt="" className='guia-articulo-img'/>
            <div className='guia-texto'>
               <h2>Yo te cielo con ave</h2>
               <button>VER SHOP</button>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Guiaregalos

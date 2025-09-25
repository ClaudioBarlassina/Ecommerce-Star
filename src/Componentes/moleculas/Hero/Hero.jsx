import React from 'react'
import './Hero.css'
import imagen from '../../Atomos/img/Component 43.svg'
import imagen1Seccion2 from '../../Atomos/img/image 1.svg'
import imagen2Seccion2 from "../../Atomos/img/anilloplata.svg"
import imagen3Seccion2 from "../../Atomos/img/image 2.png"
import imagen4Seccion2 from "../../Atomos/img/arosplata.png"




const Hero = () => {
  return (
    <div className="contenedor-hero">
      <img src={imagen} alt="" className="imagen-destacada" />

      {/* seccion2 */}
      <div className="seccion2">

        {/* grupo1 */}
        <div className="seccion-conjunto">

          <img src={imagen1Seccion2} alt="" className='seccion2-conjunto-img'/>

          <div className='seccion2-parrafo-ge'>
            <h3 className="seccion2-titulo">Alianzas Doradas</h3> 
            <p className="seccion2-parrafo">
              Cada detalle importa, y por eso nuestras alianzas estan pensadas
              para acompañarte en los instantes mas importantes de tu vida
            </p>
          </div>
        </div>

        {/* grupo2 */}
        <div className="seccion-conjunto">

          <div className='seccion2-parrafo-ge'>
            <h3 className="seccion2-titulo-i">Tus momentos mas valiosos..</h3>
            <h4 className="seccion2-subtitulo-i">Plata 950</h4>
            <p className="seccion2-parrafo">
              Nuestra colección en plata combina delicadeza y estilo atemporal.
              Cada pieza está pensada para acompañarte todos los días,
              resaltando tu esencia con un brillo único
            </p>
          </div>
          <img src={imagen2Seccion2} alt="" className='seccion2-conjunto-img'/>
        </div>

        {/*grupo3 */}
        <div className="seccion-conjunto">
          <img src={imagen3Seccion2} alt="" className='seccion2-conjunto-img' />
          <div className='seccion2-parrafo-ge'>
            <h3 className="seccion2-titulo">Cruz Ornamental Gotico</h3>

            <p className="seccion2-parrafo">
              Cruz gótica en acero inoxidable, con detalles ornamentales y
              piedra central negra. Elegante y resistente, ideal para un estilo
              único y distintivo.
            </p>
            <div className="seccion2-button">
              <button className='seccion-button-agregar'>Agregar</button>
              <h3>6.500$</h3>
            </div>
          </div>
        </div>

        {/* grupo4 */}
        <div className="seccion-conjunto">
          <div className='seccion2-parrafo-ge'>
            <h3 className="seccion2-titulo">Aros Flor de Zafiro</h3>

            <p className="seccion2-parrafo">
              Aros en forma de flor, con piedras azules y blancas que aportan
              brillo y elegancia. Perfectos para un look delicado y sofisticado.
            </p>
            <div className="seccion2-button">
              <button className='seccion-button-agregar'>Agregar</button>
              <h3>10.000$</h3>
            </div>
          </div>
          <img src={imagen4Seccion2}alt="" className='seccion2-conjunto-img' />
        </div>
      </div>
      
      <div>

      </div>
    </div>
  )
}

export default Hero

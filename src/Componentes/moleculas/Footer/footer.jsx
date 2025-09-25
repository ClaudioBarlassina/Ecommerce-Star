import React from 'react'
import whatsapps from '../../Atomos/img/whatsapp.png'
import '../Footer/Footer.css'
const footer = () => {
  return (
    <div className="footer-contenedor">
      <div className="footer-contenedorSecundario">
        <h2 className="footer-nombre">Star</h2>
        <h4>CORDOBA | ARGENTINA </h4>
        <div
          className="footer-org-whats
        "
        >
          <h3>
            <a href="https://wa.me/5493511234567"> Comunicate por WhatsApp:</a>
          </h3>
          <img src={whatsapps} alt="" className="footer-org-whats-img" />
        </div>
      </div>
      <div className="footer-final">
        <h2>© 2025 Star. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default footer

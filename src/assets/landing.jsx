import React from "react";
import OFERTA from "./OFERTA.svg";
import anilloDiamantes from "./anillo-diamantes-lujo-aislado-sobre-fondo-blanco-1.svg";
import battery from "./battery.png";
import facebook from "./facebook.svg";
import image2 from "./image-2.svg";
import image4 from "./image-4.png";
import instagram from "./instagram.svg";
import leftSide from "./left-side.png";
import mobileSignal from "./mobile-signal.svg";
import rectangle1 from "./rectangle-1.png";
import rectangle29 from "./rectangle-29.svg";
import rectangle89 from "./rectangle-89.png";
import wifi from "./wifi.svg";
import youtube from "./youtube.svg";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="page-container">
        {/* Header */}
        <header className="ios-status-bar-black">
          <div className="right-side">
            <img src={battery} alt="Battery" className="battery" />
            <img src={wifi} alt="WiFi" className="wifi" />
            <img
              src={mobileSignal}
              alt="Mobile Signal"
              className="mobile-signal"
            />
          </div>
          <img src={leftSide} alt="Left Side" className="left-side" />
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image-wrapper">
            <img
              src={rectangle1}
              alt="Hero Background"
              className="hero-image"
            />
            <div className="hero-text">
              <h2 className="hero-subtitle">TEMPORADA</h2>
              <h1 className="hero-title">
                NUEVOS
                <br />
                INGRESOS
              </h1>
              <p className="hero-season">PRIMAVERA</p>
            </div>
          </div>
          <div className="oferta-banner">
            <img src={OFERTA} alt="Oferta" className="oferta-image" />
          </div>
        </section>

        {/* Product Highlights */}
        <section className="product-highlight">
          <div className="product-card">
            <img
              src={image4}
              alt="Alianzas Doradas"
              className="product-image"
            />
            <h3 className="product-title">Alianzas Doradas</h3>
            <p className="product-description">
              Cada detalle importa, y por eso nuestras alianzas están pensadas
              para acompañarte en los instantes más importantes de tu vida.
            </p>
          </div>

          <div className="product-card">
            <img src={rectangle89} alt="Plata 950" className="product-image" />
            <h3 className="product-title">Tus momentos mas valiosos..</h3>
            <p className="product-subtitle">Plata 950</p>
            <p className="product-description">
              Nuestra colección en plata combina delicadeza y estilo atemporal.
              Cada pieza está pensada para acompañarte todos los días,
              resaltando tu esencia con un brillo único.
            </p>
          </div>

          <div className="product-card">
            <img
              src={anilloDiamantes}
              alt="Cruz Ornamental"
              className="product-image"
            />
            <h3 className="product-title">Cruz Ornamental Gótico</h3>
            <p className="product-description">
              Cruz gótica en acero inoxidable, con detalles ornamentales y
              piedra central negra. Elegante y resistente, ideal para un estilo
              único y distintivo.
            </p>
            <p className="product-price">6.500 $</p>
            <button className="add-to-cart">Agregar</button>
          </div>

          <div className="product-card">
            <img
              src={image2}
              alt="Aros Flor de Zafiro"
              className="product-image"
            />
            <h3 className="product-title">Aros Flor de Zafiro</h3>
            <p className="product-description">
              Aros en forma de flor, con piedras azules y blancas que aportan
              brillo y elegancia. Perfectos para un look delicado y sofisticado.
            </p>
            <p className="product-price">10.000$</p>
            <button className="add-to-cart">Agregar</button>
          </div>
        </section>

        {/* Collection Section */}
        <section className="collection-section">
          <img
            src={rectangle29}
            alt="Collection"
            className="collection-image"
          />
          <div className="collection-text">
            <p className="collection-label">Comfort</p>
            <h2 className="collection-title">Star Best Collections</h2>
            <p className="collection-description">
              Diseños únicos y vanguardistas te esperan para complementar cada
              uno de tus looks.
            </p>
            <button className="collection-button">Descubre la colección</button>
          </div>
        </section>

        {/* Material Section */}
        <section className="material-section">
          <h3 className="material-title">100% Acero Quirúrgico</h3>
          <p className="material-description">
            Diseñadas para durar y para destacar, nuestras joyas de 100% acero
            quirúrgico te dan la libertad de expresarte. Sumérgete en un mundo
            de color y elige tu joya ideal: el lujo del dorado, la elegancia del
            plateado, la rebeldía del negro o la dulzura del nuevo acero rosado.
            ¿Cuál de estos tonos contará tu historia hoy
          </p>
        </section>

        {/* Gift Guide */}
        <section className="gift-guide">
          <h3 className="gift-title">Guia de Regalos</h3>
          <p className="gift-description">
            La selección definitiva para celebrar con estilo
          </p>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <div className="featured-card">
            <h4 className="featured-title">Anillo Zirconia Verde</h4>
            <a href="#" className="shop-now">
              VER SHOP
            </a>
          </div>
          <div className="featured-card">
            <h4 className="featured-title">Yo te cielo con ave</h4>
            <a href="#" className="shop-now">
              VER SHOP
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <h3 className="newsletter-title">Recibí lo último de STAR</h3>
          <p className="newsletter-description">
            Sé la primera en enterarte de nuestras nuevas colecciones,
            promociones exclusivas e inspiración para tu estilo.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter email address"
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              SUBCRIBIRME
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <h2 className="footer-brand">Star</h2>
            <div className="footer-meta">
              <span>LANGUAGE/ES</span>
              <span>COUNTRY|REGION/USA</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Star. All rights reserved.</p>
            <div className="social-icons">
              <img src={youtube} alt="YouTube" />
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};
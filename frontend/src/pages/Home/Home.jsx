import React, { useState, useEffect } from 'react';
import { FacebookLogo, InstagramLogo, TwitterLogo, SpotifyLogo, YoutubeLogo, LinkedinLogo, Equalizer } from "phosphor-react";


const sliderImages = [
  '/src/assets/slider/image1.jpg', // Ajusta la ruta de la imagen
  '/src/assets/slider/image2.jpg',
  '/src/assets/slider/image3.jpg'
];

export const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen del slider cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Sección del slider */}
      <header className="home-header">
        <div className="slider">
          <img
            src={sliderImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </header>

      {/* Sección de botones de navegación */}
      <section className="home-buttons">
        <button className="nav-button">
          <img src="/src/assets/buttons/calendar.png" alt="Vista 1" />
          <span>Calendario de Eventos</span>
        </button>
        <button className="nav-button">
          <img src="/src/assets/buttons/cepillo-de-pintura.png" alt="Vista 2" />
          <span>Fotografía y Pintura</span>
        </button>
        <button className="nav-button">
          <img src="/src/assets/buttons/danza.png" alt="Vista 3" />
          <span>Bailarines</span>
        </button>
        <button className="nav-button">
          <img src="/src/assets/buttons/nota-musical.png" alt="Vista 3" />
          <span>Músicos</span>
        </button>
      </section>

      {/* Footer con redes sociales y la información adicional */}
      <footer className="home-footer">
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo size={32} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <InstagramLogo size={32} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo size={32} />
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyLogo size={32} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeLogo size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={32} />
          </a>
          <a
            href="https://deezer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Equalizer size={32} />
          </a>
        </div>

        
        {/* Información adicional en 5 columnas */}
        <div className="footer-extra">
          <div className="footer-columns">
            <div className="footer-column">
              <p>Comfama</p>
              <p>Conoce Comfama</p>
              <p>Centro de Ayuda</p>
              <p>Encuéntranos</p>
              <p>Tarifas</p>
              <p>Beneficios</p>
              <p>Trabaja con Nosotros</p>
            </div>
            <div className="footer-column">
              <p>Te acompañamos</p>
              <p>Atención y servicio a la ciudadanía</p>
              <p>Presentar una petición</p>
              <p>Carta derechos y deberes afiliados</p>
              <p>Nuestros compromisos</p>
              <p>Ayudanos a mejorar</p>
              <p>Mapa del sitio</p>
            </div>
            <div className="footer-column">
              <p>Central de Llamadas</p>
              <p>Valle de Aburrá y Oriente cercano</p>
              <p>604 360 70 80</p>
              <p>Para los demás municipios</p>
              <p>01 8000 415 455</p>
              <p>Área administrativa</p>
              <p>604 216900</p>
              <p>Línea de transparencia</p>
              <p>01 8000 423517</p>
            </div>    
          </div>
        </div>
        <div>
            {/* Sección de botones de navegación */}
            <section className="imagen">
                <img src="/src/assets//logo.png" alt="Vista 1" />
                <p>Comfama es un sitio seguro</p>
            </section>
        </div>
        <div className="footer-info">
          <p>Copyright©2025. Comfama. Todos los derechos reservados. Medellín - Colombia</p>
        </div>
      </footer>
    </div>
  );
};


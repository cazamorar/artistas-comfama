import React from 'react'
import { FacebookLogo, InstagramLogo, TwitterLogo, SpotifyLogo, YoutubeLogo, LinkedinLogo, Equalizer } from "phosphor-react";
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className="social-media">
          <h3 className={style.footer__social__text}>Síguenos</h3>
          <div className={style.footer__social__icons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <FacebookLogo size={40} weight='fill' color='#625E56' />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            > 
              <InstagramLogo size={40} weight='fill' color='#625E56' />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogo size={40} weight='fill' color='#625E56' />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyLogo size={40} weight='fill' color='#625E56' />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={40} weight='fill' color='#625E56' />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={40} weight='fill' color='#625E56' />
            </a>
            <a
              href="https://deezer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Equalizer size={40} weight='fill' color='#625E56' />
            </a>
          </div>
        </div>

        
        {/* Información adicional en 5 columnas */}
        <div className={style.footer__info__container}>
          <div className={style.footer__info}>
            <div className={style.footer__info__column}>
              <p className={style.footer__info__title}>Comfama</p>
              <p>Conoce Comfama</p>
              <p>Centro de Ayuda</p>
              <p>Encuéntranos</p>
              <p>Tarifas</p>
              <p>Beneficios</p>
              <p>Trabaja con Nosotros</p>
            </div>
            <div className={style.footer__info__column}>
              <p className={style.footer__info__title}>Te acompañamos</p>
              <p>Atención y servicio a la ciudadanía</p>
              <p>Presentar una petición</p>
              <p>Carta derechos y deberes afiliados</p>
              <p>Nuestros compromisos</p>
              <p>Ayudanos a mejorar</p>
              <p>Mapa del sitio</p>
            </div>
            <div className={style.footer__info__column}>
              <p className={style.footer__info__title}>Central de Llamadas</p>
              <span>
                <p>Valle de Aburrá y Oriente cercano</p>
                <p>604 360 70 80</p>
              </span>
              <span>
                <p>Para los demás municipios</p>
                <p>01 8000 415 455</p>
              </span>
              <span>
                <p>Área administrativa</p>
                <p>604 216900</p>
              </span>
              <span>
                <p>Línea de transparencia</p>
                <p>01 8000 423517</p>
              </span>
            </div>    
          </div>
        </div>

        <div className={style.footer__logo}>
          <img src="/src/assets//logo.png" alt="Vista 1"/>
          <p>Comfama es un sitio seguro</p>
        </div>
      </div>
      <div className={style.footer__copy}>
        <p>Copyright©2025. Comfama. Todos los derechos reservados. Medellín - Colombia</p>
      </div>
    </footer>
  )
}
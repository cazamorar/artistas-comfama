import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer } from "phosphor-react";
import style from "./Modal.module.css";

import React from 'react'
import Button from "../Button/Button";

export const Modal = ({profile, OnCloseFuntion}) => {
  return (
    <div className={style.modal__container} onClick={OnCloseFuntion}>
      <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
        <button className={style.modal__close} onClick={OnCloseFuntion}>X</button>
        {/* Encabezado con el nombre del músico */}
        <div className={style.modal__title}>
          <h2 >{profile.name}</h2>
        </div>

        {/* Sección de descripción e imagen */}
        <div className={style.modal__main__profile}>
          <div className={style.modal__description__container}>
            <div className={style.modal__description__text}>
              <p>{profile.description}</p>
            </div>

            <div className={style.modal__description__social}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramLogo size={40} weight='fill' color='#1C170D' />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <SpotifyLogo size={40} weight='fill' color='#1C170D' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <YoutubeLogo size={40} weight='fill' color='#1C170D' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Equalizer size={40} weight='fill' color='#1C170D' />
              </a>
            </div>
          </div>

          <div className={style.modal__main__img__container}>
            <div className={style.modal__main__decoration}></div>
            <img src={profile.photo} alt={profile.name} className={style.modal__main__img} />
          </div>

        </div>

          {/* Portafolio de videos */}
          <div className={style.modal__portfolio__container}>
            <div className={style.modal__portfolio__title}>
              <h3 >Portafolio</h3>
            </div>
            <div className={style.modal__portfolio__item__container}>
                <iframe
                  width="408"
                  height="306"
                  src="https://www.youtube.com/embed/VIDEO_ID_MAIN"
                  frameBorder="0"
                  allowFullScreen
                  title="Main Video"
                  className={`${style.modal__portfolio__item} ${style.main__item}`}
                ></iframe>
                <iframe
                  width="256"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID_1"
                  frameBorder="0"
                  allowFullScreen
                  title="Video 1"
                  className={style.modal__portfolio__item}
                ></iframe>
                <iframe
                  width="256"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  frameBorder="0"
                  allowFullScreen
                  title="Video 2"
                  className={style.modal__portfolio__item}
                ></iframe>
                <iframe
                  width="256"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID_3"
                  frameBorder="0"
                  allowFullScreen
                  title="Video 3"
                  className={style.modal__portfolio__item}
                ></iframe>
            </div>
          </div>

          <div className={style.modal__button__container}>
            <Button buttonText={"Contactar"} clickFunction={() => console.log("Click")} />
          </div>
        </div>
        
      </div>
  )
}

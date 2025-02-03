import React, { useState, useEffect } from 'react';
import style from './Home.module.css';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from "react-router-dom";

const sliderImageInfo = [
  {
    title: 'Estéreo Picnic',
    description: 'Acompañanos en el mejor concierto de música alternativa',
    image: '/src/assets/slider/image1.jpg'
  },
  {
    title: 'Nada es Permanente',
    description: 'Paula Arenas se complace en anunciar su gira Nada es permanente Tour. La gira comenzará en el mes de octubre y llevará a Paula a presentarse en varias ciudades, cerrando el año con una serie de conciertos inolvidables.',
    image: '/src/assets/slider/image2.jpg'
  },
  {
    title: 'Quinteto Giovanni Parra',
    description: 'Disfruta de la música de cámara con el Quinteto Giovanni Parra, junto a los bailarines invitados Ivan Ovalle y Gina Medina',
    image: '/src/assets/slider/image3.jpg'
  }
]

export const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen del slider cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderImageInfo.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.main__container}>
      {/* Sección del slider */}
      <header className={style.header}>
        <div className={`${style.header__decoration} ${style.left}`}></div>
        <div className={`${style.header__decoration} ${style.right}`}></div>
        <div className={style.header__main__container}>
          <div className={style.header__main}>
            <img
              src={sliderImageInfo[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className={style.header__main__img}
            />
            <div className={style.header__main__text}>
              <h1>{sliderImageInfo[currentIndex].title}</h1>
              <p>{sliderImageInfo[currentIndex].description}</p>
              <Button buttonText="Ver Mas" clickFunction={() => console.log("Click")} />
            </div>
          </div>
        </div>
      </header>

      {/* Sección de botones de navegación */}
      <section className={style.cards__container}>
        <Link to="/calendario-eventos" className={`${style.card} ${style.main__card}`} >
          <img src="/src/assets/buttons/calendar.png" alt="Vista 1" />
          <span className={style.card__text}>Calendario de Eventos</span>
        </Link>
        <Link to="/fotografia-pintura" className={style.card}>
          <img src="/src/assets/buttons/cepillo-de-pintura.png" alt="Vista 2" />
          <span className={style.card__text}>Fotografía y Pintura</span>
        </Link>
        <Link to="/bailarines" className={style.card}>
          <img src="/src/assets/buttons/danza.png" alt="Vista 3" />
          <span className={style.card__text}>Bailarines</span>
        </Link>
        <Link to="/musicos" className={style.card}>
          <img src="/src/assets/buttons/nota-musical.png" alt="Vista 3" />
          <span className={style.card__text}>Músicos</span>
        </Link>
      </section>
    </div>
  );
};


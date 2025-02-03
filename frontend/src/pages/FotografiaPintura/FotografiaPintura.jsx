import React, { useState, useContext  } from 'react';
import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer } from "phosphor-react";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import FilterBar from '../../components/FilterBar/FilterBar';
import style from './FotografiaPintura.module.css'


// Datos de ejemplo para los músicos
const musicians = [
  {
    id: 1,
    name: 'Daniel Otero',
    genre: 'ABSTRACTO',
    description: 'Arte contemporáneo tiene la virtud de reflejar la conciencia social del mundo',
    photo: '/src/assets/pages/fotopintura1.png' // Ajusta la ruta de la imagen
  },
  {
    id: 2,
    name: 'Carolina Caicedo',
    genre: 'FIGURATIVA',
    description: 'Esta colombiana es tal vez una de las artistas contemporáneas más premiadas de los últimos tiempos',
    photo: '/src/assets/pages/fotopintura2.png'
  },
  {
    id: 3,
    name: 'Manuel Hernandez',
    genre: 'ABSTRACTO',
    description: 'Hernández hace parte de una camada de nuevos artistas contemporáneos de Colombia.',
    photo: '/src/assets/pages/fotopintura7.jpg'
  },
  {
    id: 4,
    name: 'Daniel Otero',
    genre: 'CLÁSICO',
    description: 'Arte contemporáneo tiene la virtud de reflejar la conciencia social del mundo',
    photo: '/src/assets/pages/fotopintura4.png'
  },
  {
    id: 5,
    name: 'Vinci',
    genre: 'REALISMO',
    description: 'Creadores contemporáneos de REALISMO',
    photo: '/src/assets/pages/fotopintura5.jpg'
  },
  {
    id: 6,
    name: 'Al',
    genre: 'ILUSTRACIONES',
    description: 'Ilustraciones.',
    photo: '/src/assets/pages/fotopintura6.jpg'
  },
  {
    id: 7,
    name: 'Grua',
    genre: 'FIGURATIVA',
    description: 'Louvre.',
    photo: '/src/assets/pages/fotopintura7.jpg'
  },
  {
    id: 8,
    name: 'Juli Toro',
    genre: 'BLANCO Y NEGRO',
    description: 'Melódico.',
    photo: '/src/assets/pages/fotopintura8.jpg'
  }
];

// Opciones de filtro según el mockup
const genreFilters = ['PAISAJE', 'BLANCO Y NEGRO', 'ABSTRACTO', 'FIGURATIVA', 'REALISMO', 'DIGITAL', 'ILUSTRACIONES', 'MÁS'];



const ModalProfile = ({ musician, onClose }) => {
  if (!musician) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {/* Encabezado con el nombre del músico */}
        <div className="modal-header">
          <h2 className="modal-musician-name">{musician.name}</h2>
        </div>

        {/* Sección de descripción e imagen */}
        <div className="modal-body">
          <div className="modal-info">
            <div className="modal-description">
              <p>{musician.description}</p>
            </div>
            <div className="modal-image">
              <img src={musician.photo} alt={musician.name} />
            </div>
          </div>

          {/* Redes sociales */}
          <div className="modal-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={32} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <SpotifyLogo size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <YoutubeLogo size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Equalizer size={32} />
            </a>
            
          </div>

          {/* Portafolio de videos */}
          <div className="modal-portfolio">
            <h3 className="portfolio-title">Portafolio</h3>
            <div className="portfolio-videos">
              <div className="video-main">
                <iframe
                  width="408"
                  height="306"
                  src="https://www.youtube.com/embed/VIDEO_ID_MAIN"
                  frameBorder="0"
                  allowFullScreen
                  title="Main Video"
                ></iframe>
              </div>
              <div className="video-secondary">
                <iframe
                  width="256"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID_1"
                  frameBorder="0"
                  allowFullScreen
                  title="Video 1"
                ></iframe>
                <iframe
                  width="256"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  frameBorder="0"
                  allowFullScreen
                  title="Video 2"
                ></iframe>
                <iframe
                  width="256"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID_3"
                  frameBorder="0"
                  allowFullScreen
                  title="Video 3"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};













export const FotografiaPintura = () => {

  // Estado para almacenar el género seleccionado. Si está vacío se muestran todos.
  const [selectedGenre, setSelectedGenre] = useState('');



  // Estado para el modal (músico seleccionado)
  const [modal, setModal] = useState(null);



  // Filtra los músicos según el género seleccionado
  const filteredProfiles = selectedGenre
    ? musicians.filter(musician => musician.genre === selectedGenre)
    : musicians;

  return (
    <div className={style.main}>
      {/* Título de la vista */}
      <h1 className={style.title}>FOTOGRAFÍA Y PINTURA</h1>

      {/* Filtros por género */}
      <FilterBar filters={genreFilters} setFilterFunction={setSelectedGenre} selectedFilter = {selectedGenre}/>

      {/* Cards de músicos */}
      <CardsContainer cards={filteredProfiles} setModalFunction={setModal} />

      {/* Modal para ver el perfil */}
      {modal && (
        <ModalProfile musician={modal} onClose={() => setModal(null)} />
      )}
      
    </div>
  );
};
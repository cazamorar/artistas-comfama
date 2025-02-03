import React, { useState, useContext  } from 'react';
import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer, Cards } from "phosphor-react";
import CardsContainer from '../../components/CardsContainer/CardsContainer';

// Datos de ejemplo para los músicos
const musicians = [
  {
    id: 1,
    name: 'Brielaojeda',
    genre: 'ALTERNATIVO',
    description: 'Brielaojeda es un cantante/autora de gran trayectoria con participación en eventos como Estereopicnic.',
    photo: '/src/assets/pages/musico1.png' // Ajusta la ruta de la imagen
  },
  {
    id: 2,
    name: 'Willow Smith',
    genre: 'R&B/HIP-HOP',
    description: 'Willow es un cantante/autora de gran trayectoria con participación en eventos como Coachella.',
    photo: '/src/assets/pages/musico2.png'
  },
  {
    id: 3,
    name: 'Jósean Log',
    genre: 'INDIE',
    description: 'Jósean Log es un cantante, compository multinstrumentista mexicano conocido por su participación en la escena del indie pop.',
    photo: '/src/assets/pages/musico3.png'
  },
  {
    id: 4,
    name: 'Daniel, Me Estás Matando',
    genre: 'CLÁSICO',
    description: 'Banda de Boleroglam compuesta por Daniel Zepeda e Iván De La Rioja, que musicaliza suspiros y efervesce las almas románticas de sus escuchas.',
    photo: '/src/assets/pages/musico4.png'
  },
  {
    id: 5,
    name: 'Jowell & Randy',
    genre: 'REGGAETON',
    description: 'Creadores contemporáneos de reggaeton.',
    photo: '/src/assets/pages/musico5.png'
  },
  {
    id: 6,
    name: 'Mon Laferte',
    genre: 'JAZZ',
    description: 'Expresión musical de diosas.',
    photo: '/src/assets/pages/musico6.jpg'
  },
  {
    id: 7,
    name: 'Los Panchos',
    genre: 'SALSA',
    description: 'Requintistas ganadores internacionales.',
    photo: '/src/assets/pages/musico7.jpg'
  },
  {
    id: 8,
    name: 'Daniel Caesar',
    genre: 'MÁS',
    description: 'Melódico.',
    photo: '/src/assets/pages/musico8.jpg'
  }
];

// Opciones de filtro según el mockup
const genreFilters = ['ALTERNATIVO', 'R&B/HIP-HOP', 'INDIE', 'CLÁSICO', 'JAZZ', 'REGGAETON', 'SALSA', 'MÁS'];


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












export const Musicos = () => {

  // Estado para almacenar el género seleccionado. Si está vacío se muestran todos.
  const [selectedGenre, setSelectedGenre] = useState('');




  // Estado para el modal (músico seleccionado)
  const [modal, setModal] = useState(null);





  // Filtra los músicos según el género seleccionado
  const filteredProfiles = selectedGenre
    ? musicians.filter(musician => musician.genre === selectedGenre)
    : musicians;

  return (
    <div className="musicos-container">
      {/* Título de la vista */}
      <h1 className="musicos-title">MÚSICOS</h1>

      {/* Filtros por género */}
      <div className="genre-filters">
        {genreFilters.map((genre, index) => (
          <button
            key={index}
            className={`filter-button ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
        {/* Botón para mostrar TODOS los músicos */}
        <button
          className={`filter-button ${selectedGenre === '' ? 'active' : ''}`}
          onClick={() => setSelectedGenre('')}
        >
          TODOS
        </button>
      </div>

      {/* Cards de músicos */}
      <CardsContainer cards={filteredProfiles} setModalFunction={setModal} />

      {/* Modal para ver el perfil */}
      {modal && (
        <ModalProfile musician={modal} onClose={() => setModal(null)} />
      )}
    </div>
  );
};
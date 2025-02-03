import React, { useState, useContext  } from 'react';
import '../styles/pages/FotografiaPintura.css';
import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer } from "phosphor-react";


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
  const [modalMusician, setModalMusician] = useState(null);



  // Filtra los músicos según el género seleccionado
  const filteredMusicians = selectedGenre
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
      <div className="musicians-cards">
        {filteredMusicians.map(musician => (
          <div key={musician.id} className="musician-card">
            <img
              src={musician.photo}
              alt={musician.name}
              className="musician-photo"
            />
            <h2 className="musician-name">{musician.name}</h2>
            <p className="musician-genre">{musician.genre}</p>
            <p className="musician-description">{musician.description}</p>

            <button className="profile-button" onClick={() => setModalMusician(musician)} >
                Ver perfil
            </button>
          </div>
        ))}



      </div>

      {/* Modal para ver el perfil */}
      {modalMusician && (
        <ModalProfile musician={modalMusician} onClose={() => setModalMusician(null)} />
      )}
      
    </div>
  );
};
import React, { useState, useContext  } from 'react';
import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer } from "phosphor-react";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import FilterBar from '../../components/FilterBar/FilterBar';


// Datos de ejemplo para los músicos
const musicians = [
  {
    id: 1,
    name: 'Karen Paz',
    genre: 'HIP-HOP',
    description: 'Karen es una bailarina versátil con conocimiento en varios estilos de baile, tiene un gran recorrido en shows con artistas como Beyoncé.',
    photo: '/src/assets/pages/bailarin1.png' // Ajusta la ruta de la imagen
  },
  {
    id: 2,
    name: 'Jenny Restrepo',
    genre: 'DANCEHALL',
    description: 'Bailarina perteneciente al crew Mulahttaz, ha baildo con artistas como Farina, Maluma, Diplo.',
    photo: '/src/assets/pages/bailarin2.png'
  },
  {
    id: 3,
    name: 'Zack Jot',
    genre: 'CONTEMPORÁNEO',
    description: 'Zack Jot es un reconocido coreografo en LA.',
    photo: '/src/assets/pages/bailarin3.png'
  },
  {
    id: 4,
    name: 'Yai Ariza',
    genre: 'SALSA',
    description: 'Bailarín de Beyoncé, Dualipa, con presentasion en el Super Bowl',
    photo: '/src/assets/pages/bailarin4.png'
  },
  {
    id: 5,
    name: 'Matt Stefanina',
    genre: 'HIP-HOP',
    description: 'Coreógrafo profesional.',
    photo: '/src/assets/pages/bailarin5.jpg'
  },
  {
    id: 6,
    name: 'Parris Goebel',
    genre: 'HOUSE',
    description: 'Bailarina de Rihana.',
    photo: '/src/assets/pages/bailarin6.jpg'
  },
  {
    id: 7,
    name: 'Ian',
    genre: 'BALLET',
    description: 'WOD winner.',
    photo: '/src/assets/pages/bailarin7.jpg'
  },
  {
    id: 8,
    name: 'AUDREY',
    genre: 'HIP-HOP',
    description: 'Gira por Corea del Sur.',
    photo: '/src/assets/pages/bailarin8.png'
  }
];

// Opciones de filtro según el mockup
const genreFilters = ['SALSA', 'CONTEMPORÁNEO', 'HIP-HOP', 'DANCEHALL', 'HOUSE', 'FOLKLORE', 'BALLET', 'MÁS'];













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













export const Bailarines = () => {

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
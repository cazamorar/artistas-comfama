import React, { useState, useContext  } from 'react';
import '../styles/pages/FotografiaPintura.css';


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




export const FotografiaPintura = () => {

  // Estado para almacenar el género seleccionado. Si está vacío se muestran todos.
  const [selectedGenre, setSelectedGenre] = useState('');

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

            <button className="profile-button" >
                Ver perfil
            </button>
          </div>
        ))}



      </div>
    </div>
  );
};
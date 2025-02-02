import React, { useState, useContext  } from 'react';
import '../styles/pages/Musicos.css';


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




export const Musicos = () => {

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
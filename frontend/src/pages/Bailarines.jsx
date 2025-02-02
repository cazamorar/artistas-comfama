import React, { useState, useContext  } from 'react';
import '../styles/pages/Bailarines.css';


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




export const Bailarines = () => {

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
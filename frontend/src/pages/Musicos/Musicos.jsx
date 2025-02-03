import React, { useState, useContext  } from 'react';
import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer, Cards } from "phosphor-react";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import FilterBar from '../../components/FilterBar/FilterBar';
import style from './Musicos.module.css'
import { Modal } from '../../components/Modal/Modal';

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




  // Estado para el modal (músico seleccionado)
  const [modal, setModal] = useState(null);





  // Filtra los músicos según el género seleccionado
  const filteredProfiles = selectedGenre
    ? musicians.filter(musician => musician.genre === selectedGenre)
    : musicians;

  return (
    <div className={style.main}>
      {/* Título de la vista */}
      <h1 className={style.title}>MÚSICOS</h1>

      {/* Filtros por género */}
      <FilterBar filters={genreFilters} setFilterFunction={setSelectedGenre} selectedFilter = {selectedGenre}/>

      {/* Cards de músicos */}
      <CardsContainer cards={filteredProfiles} setModalFunction={setModal} />

      {/* Modal para ver el perfil */}
      {modal && (
        <Modal profile={modal} OnCloseFuntion={() => setModal(null)} />
      )}
    </div>
  );
};
import React, { useState, useContext  } from 'react';
import { InstagramLogo,  SpotifyLogo, YoutubeLogo, Equalizer } from "phosphor-react";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import FilterBar from '../../components/FilterBar/FilterBar';
import style from './FotografiaPintura.module.css'
import { Modal } from '../../components/Modal/Modal';


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
        <Modal profile={modal} OnCloseFuntion={() => setModal(null)} />
      )}
      
    </div>
  );
};
import React, { useState, useContext  } from 'react';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import FilterBar from '../../components/FilterBar/FilterBar';
import style from './Musicos.module.css'
import { Modal } from '../../components/Modal/Modal';
import { musicians, genreFilters  } from './Data';

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
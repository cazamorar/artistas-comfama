import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import style from './CalendarioEventos.module.css';
import EventCard from '../../components/EventCard/EventCard';

// Datos de ejemplo para eventos
const eventsData = [
  {
    id: 1,
    title: 'Festival de Animación',
    image: '/src/assets/pages/evento1.png',
    date: { day: '22', month: 'ENE', year: '2025' },
    location: 'Teatro Metropolitano',
    time: '20:00',
    filterType: 'ESTA SEMANA'
  },
  {
    id: 2,
    title: 'Rootweylas',
    image: '/src/assets/pages/evento2.png',
    date: { day: '24', month: 'ENE', year: '2025' },
    location: 'Teatro Universidad de Medellín',
    time: '20:00',
    filterType: 'ESTA SEMANA'
  },
  {
    id: 3,
    title: '¿Quién soy yo?',
    image: '/src/assets/pages/evento3.png',
    date: { day: '31', month: 'ENE', year: '2025' },
    location: 'Teatro Metropolitano',
    time: '20:00',
    filterType: 'ESTE MES'
  },
  {
    id: 4,
    title: 'El Lago de los cisnes',
    image: '/src/assets/pages/evento4.png',
    date: { day: '05', month: 'DEC', year: '2025' },
    location: 'Teatro Metropolitano',
    time: '20:00',
    filterType: 'ESTE AÑO'
  }
];

const calendarFilters = ['ESTA SEMANA', 'ESTE MES', 'ESTE AÑO'];

export const CalendarioEventos = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  // Si no se ha seleccionado filtro se muestran todos
  const filteredEvents = selectedFilter
    ? eventsData.filter(event => event.filterType === selectedFilter)
    : eventsData;

  return (
    <div className={style.main}>
      {/* Título */}
      <h1 className={style.title}>CALENDARIO DE EVENTOS</h1>

      {/* Filtros */}
      <FilterBar filters={calendarFilters} setFilterFunction={handleFilter} selectedFilter = {selectedFilter}/>

      {/* Cards de eventos */}
      <div className={style.main__container}>
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import style from './CalendarioEventos.module.css';
import EventCard from '../../components/EventCard/EventCard';
import { eventsData, calendarFilters } from './Data';

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

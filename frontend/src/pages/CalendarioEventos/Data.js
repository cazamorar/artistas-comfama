// Datos de ejemplo para eventos
export const eventsData = [
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

export const calendarFilters = ['ESTA SEMANA', 'ESTE MES', 'ESTE AÑO'];
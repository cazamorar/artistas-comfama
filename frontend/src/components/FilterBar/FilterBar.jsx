import React from 'react'
import style from './FilterBar.module.css'

const FilterBar = ({filters, selectedFilter, setFilterFunction}) => {
  return (
    <div className={style.filterBar}>
      {filters.map((filter, index) => (
        <div
          key={index}
          onClick={() => setFilterFunction(filter)}
          className = {`${style.filterBar__item} ${selectedFilter === filter ? style.selected : ''}`}
        >
          {filter}
        </div>
      ))}
      <div
          onClick={() => setFilterFunction('')}
          className = {`${style.filterBar__item} ${selectedFilter === '' ? style.selected : ''}`}
      >
        <p>TODOS</p>
      </div>
    </div>
  )
}

export default FilterBar
import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import style from './CardsContainer.module.css'

const CardsContainer = ({cards, setModalFunction}) => {
  return (
    <div className={style.cardsContainer}>
      {cards.map(profile => (
          <ProfileCard key={profile.id} profileItem={profile} setModalProfile={setModalFunction} />
        ))}
    </div>
  )
}

export default CardsContainer
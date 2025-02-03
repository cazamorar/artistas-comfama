import React from 'react'
import style from './ProfileCard.module.css'
import Button from '../../components/Button/Button'

const ProfileCard = ({profileItem, setModalProfile}) => {
  return (
    <div key={profileItem.id} className={style.card}>
      <img
        src={profileItem.photo}
        alt={profileItem.name}
        className={style.card__img}
      />
      <div className={style.card__main}>
        <h2 className={style.card__main_title}>{profileItem.name}</h2>
        <p className={style.card__main__genre}>{profileItem.genre}</p>
      </div>
      <p className={style.card__description}>{profileItem.description}</p>

      <Button buttonText="Ver Perfil" clickFunction={() => setModalProfile(profileItem)} />
    </div>
  )
}

export default ProfileCard
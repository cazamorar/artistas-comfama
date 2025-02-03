import React from 'react'
import Button from '../Button/Button'
import style from './EventCard.module.css'

const EventCard = ({event}) => {
  return (
    <div key={event.id} className={style.eventCard}>
      <div className={style.eventCard__header}>
        <h2>{event.title}</h2>
      </div>
      <div className={style.eventCard__content}>
        <img src={event.image} alt={event.title} className={style.eventCard__content__img} />
        <div className={style.eventCard__content__info}>
          <div className={style.eventCard__content__info__date}>
            <p className={style.eventCard__content__info__date__month}>{event.date.month}</p>
            <p className={style.eventCard__content__info__date__day}>{event.date.day}</p>
            <p className={style.eventCard__content__info__date__year}>{event.date.year}</p>
          </div>
          <div className={style.eventCard__content__info__description}>
            <p className={style.eventCard__content__info__description__title}>{event.location}</p>
            <p className={style.eventCard__content__info__description__time}>{event.time}</p>
          </div>
        </div>
        <div className={style.eventCard__content__button}>
          <Button className="contact-btn" buttonText={"Contactar"} clickFunction={() => console.log("Clicked")}/>
        </div>
      </div>
    </div>
  )
}

export default EventCard

import React from 'react'
import style from './Button.module.css'

function Button({clickFunction, buttonText}) {
  return (
    <button onClick={clickFunction} className={style.button}>
      {buttonText}
    </button>
  )
}

export default Button
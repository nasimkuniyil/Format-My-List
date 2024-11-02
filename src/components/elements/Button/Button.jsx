import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button className={`my-btn ${props.theme}`} onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
  )
}

export default Button
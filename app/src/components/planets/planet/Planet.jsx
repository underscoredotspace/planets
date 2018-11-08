import React from 'react'
import './planet.scss'

const Planet = ({ image, name, selected, select }) => {
  return (
    <button className={`planet ${selected ? 'selected' : ''}`}>
      <img src={image} alt={name} onClick={select} />
    </button>
  )
}

export default Planet

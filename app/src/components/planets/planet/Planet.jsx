import React from 'react';
import './planet.scss'

const Planet = ({image, name, selected}) => {
  return (
    <div className={`planet ${selected?'selected':''}`}>
      <img src={image} alt={name}/>
    </div>
  )
}
 
export default Planet;
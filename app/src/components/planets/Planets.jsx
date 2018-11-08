import React from 'react'
import Planet from './planet/Planet'
import './planets.scss'

const Planets = ({ planets, selectPlanet }) => (
  <div className="planets">
    {planets.map(planet => (
      <Planet {...planet} select={() => selectPlanet(planet)} />
    ))}
  </div>
)

export default Planets

import React from 'react'
import Planet from './planet/Planet'
import './planets.scss'

const Planets = ({planets}) => <div className="planets">{planets.map(planet => <Planet {...planet}></Planet>)}</div>

export default Planets

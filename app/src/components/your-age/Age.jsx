import React from 'react'
import './age.scss'

const Age = ({ age, onAgeChange }) => {
  return (
    <div className="age">
      <label for="age">Enter your age in Earth years:</label>
      <input
        id="age"
        type="number"
        value={age}
        onChange={e => onAgeChange(e.target.value)}
      />
    </div>
  )
}

export default Age

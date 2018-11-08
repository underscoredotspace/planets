import React, { Component, Fragment } from 'react'
import Age from './components/your-age/Age'
import './app.scss'
import Planets from './components/planets/Planets'
import api from './services/api'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 25,
      planets: []
    }

    this.setAge = this.setAge.bind(this)
    this.selectPlanet = this.selectPlanet.bind(this)
  }

  componentDidMount() {
    this.setState({ planets: api() })
  }

  setAge(age) {
    if (Number.isNaN(age) || age < 0) {
      age = ''
    }

    this.setState({ age })
  }

  selectPlanet(planetToSelect) {
    const { planets } = this.state
    for (const planet of planets) {
      planet.selected = planet === planetToSelect
    }

    this.setState({ planets })
  }

  render() {
    const { age, planets } = this.state
    return (
      <Fragment>
        <Planets planets={planets} selectPlanet={this.selectPlanet} />
        <Age age={age} onAgeChange={this.setAge} />
      </Fragment>
    )
  }
}

export default App

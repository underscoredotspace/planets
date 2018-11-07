import React, { Component, Fragment } from 'react'
import Age from './components/your-age/Age'
import './app.scss'
import Planets from './components/planets/Planets';
import api from './services/api'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 25,
      planets: []
    }

    this.setAge = this.setAge.bind(this)
  }

  componentDidMount() {
    const planets = api();
    this.setState({planets})
  }

  setAge(age) {
    if (Number.isNaN(age) || age < 0) {
      age = ''
    }

    this.setState({ age })
  }

  render() {
    const { age, planets } = this.state
    return (
      <Fragment>
        <Planets planets={planets} />
        <Age age={age} onAgeChange={this.setAge} />
      </Fragment>
    )
  }
}

export default App

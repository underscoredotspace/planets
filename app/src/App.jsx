import React, { Component } from 'react'
import Age from './components/your-age/Age'
import './app.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 25
    }

    this.setAge = this.setAge.bind(this)
  }

  setAge(age) {
    if (Number.isNaN(age) || age < 0) {
      age = ''
    }

    this.setState({ age })
  }

  render() {
    const { age } = this.state
    return <Age age={age} onAgeChange={this.setAge} />
  }
}

export default App

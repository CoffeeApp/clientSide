import React, { Component } from 'react'
import TestForm from './TestForm'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id="wrapper">
        <h1>Welcome to {this.props.name}</h1>
        <TestForm />
      </div>
    )
  }
}

export default App

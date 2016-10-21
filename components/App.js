import React, { Component } from 'react'
import TestForm from './TestForm'
import Cart from './Cart'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id="wrapper">
        <h1>Welcome to {this.props.name}</h1>
        <TestForm />
        <Cart />
      </div>
    )
  }
}

export default App

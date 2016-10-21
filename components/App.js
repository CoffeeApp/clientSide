import React, { Component } from 'react'
import Cart from './Cart'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id="wrapper">
        <h1>Welcome to {this.props.name}</h1>
        <Cart />
      </div>
    )
  }
}

export default App

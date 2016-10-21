import React, { Component } from 'react'
const feathers = require('feathers-client')
const io = require('socket.io-client')

const socket = io('http://192.168.1.8.3030')

var app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket))

var orderService = app.service('dumb-orders')

orderService.on('created', function(order) {
  console.log('someone created an order', order)
})

class TestForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      userNumber: ''
    }
    this.handleProp = this.handleProp.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.Caller = this.Caller.bind(this)
  }

  handleProp (prop) {
    return e => {
    //   var state = {}
    //   state[prop] = e.target.value
      this.setState({[prop]:e.target.value})
      console.log('input logged: ', this.state)
    }
  }

  // handleSubmit (e) {
  // let userName = this.state.userName
  // let userNumber = this.state.userNumber
  // e.preventDefault()
  // this.props.Caller(userName, userNumber)
  // }
  //
  // Caller (userName, userNumber) {
  // }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="user-name" onChange={this.handleProp('userName')} placeholder="Name" />
        <input type="text" id="user-phone" onChange={this.handleProp('userNumber')} placeholder="Phone Number" />
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default TestForm

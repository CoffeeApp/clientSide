import React, { Component } from 'react'
import { orderService } from '../lib/api'

console.log(orderService)

class TestForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      userNumber: ''
    }
    this.handleProp = this.handleProp.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit (e) {
  let userName = this.state.userName
  let userNumber = this.state.userNumber
  let comment = this.state.comment
  e.preventDefault()
  orderService.create({ userName, userNumber, comment })
    .then(function(result){
      console.log('result', result)
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="user-name" onChange={this.handleProp('userName')} placeholder="Name" />
        <input type="text" id="user-phone" onChange={this.handleProp('userNumber')} placeholder="Phone Number" />
        <input type="text" id="user-phone" onChange={this.handleProp('comment')} placeholder="Notes" />
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default TestForm

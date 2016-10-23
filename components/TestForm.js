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
  }

  handleProp (prop) {
    return e => {
    //   var state = {}
    //   state[prop] = e.target.value
      this.setState({[prop]:e.target.value})
    }
  }

  handleSubmit (e) {
  let name = this.state.userName
  let phone = this.state.userNumber
  let comment = this.state.comment
  e.preventDefault()
  orderService.create({ name, phone, comment })
    .then(function(result){
      console.log('result', result)
      // result is an array of cafes
      this.setState({...this.state, cafes: result})
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

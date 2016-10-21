import React, { Component } from 'react'
import { orderService } from '../lib/api'

console.log(orderService)

class UserForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      userNumber: '',
      comment: ''
    }
    this.handleProp = this.handleProp.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleProp (prop) {
    return e => {
    //   var state = {}
    //   state[prop] = e.target.value
      this.setState({[prop]:e.target.value})
      console.log('input logged:', this.state)
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
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="iteminput" type="text" onChange={this.handleProp('userName')} placeholder="Name" />
        <input className="iteminput" type="text" onChange={this.handleProp('userNumber')} placeholder="Phone Number" />
        <input className="iteminput" type="text" onChange={this.handleProp('comment')} placeholder="Notes" />
        <button className="button next" type="submit" >Next</button>
      </form>
    )
  }
}

export default UserForm

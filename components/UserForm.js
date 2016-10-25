import React, { Component } from 'react'
import createOrder from '../actioncreators'
import { hashHistory } from 'react-router'

class UserForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userNumber: '',
      comment: ''
    }
    this.handleProp = this.handleProp.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleProp(prop) {
    return e => {
      this.setState({[prop]:e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let name = this.state.userName
    let phone = this.state.userNumber
    let ready_time = this.state.readyTime
    let comment = this.state.comment
    let orderCoffees = Object.keys(this.props.order.orderCoffees).map((key) => (
      this.props.order.orderCoffees[key]
    ))
    let order = {
      details: {
        name,
        phone,
        status: 'new',
        comment,
        ready_time
      },
      orderCoffees
    }
    navigator.geolocation.getCurrentPosition((position) => {
      var userCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
      this.props.createOrder(order, userCoords)
    })
    hashHistory.push('/cafes')
  }

  render () {
    return (
      <form
        className="itemform"
        onSubmit={this.handleSubmit}
      >
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('userName')}
          placeholder="Your name"
        />
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('userNumber')}
          placeholder="Your phone number"
        />
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('comment')}
          placeholder="Notes"
        />
        <select className="iteminput" onChange={this.handleProp('readyTime')}>
          <option value="ASAP" defaultValue>Pick up asap...</option>
          <option value="15 minutes">Pick up in 15 mins</option>
          <option value="30 minutes">Pick up in 30 mins</option>
          <option value="45 minutes">Pick up in 45 mins</option>
          <option value="1 hour">Pick up in 1 hour</option>
        </select>
        <button
          className="button"
          type="submit">
          Next
        </button>
      </form>
    )
  }
}

export default UserForm

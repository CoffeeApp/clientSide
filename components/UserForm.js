import React, { Component } from 'react'
import createOrder from '../actioncreators'
import { hashHistory } from 'react-router'

class UserForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: this.props.customer.name,
      userNumber: this.props.customer.phone,
      comment: this.props.customer.comment,
      readyTime: this.props.customer.ready_time
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
    let orderCoffees = Object.keys(this.props.order.orderCoffees).map((key) => {
      return Object.assign({}, this.props.order.orderCoffees[key])
    })
    orderCoffees.map((coffee) => {
      if (coffee.image) {
        delete coffee.image
      }
    })
    let sendOrder = {
      details: {
        name,
        phone,
        status: 'new',
        comment,
        ready_time
      },
      orderCoffees
    }
    navigator.geolocation.getCurrentPosition((position, error) => {
      console.log('getCurrentPosition', position)
      const userCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
      this.props.createOrder(sendOrder, userCoords)
    }, (error) => {
        this.props.createOrder(sendOrder, { lat: '-41.2969092', lng: '174.7720306' })
    })
    hashHistory.push('/cafes')
  }

  render () {
     console.log(this.state.userName, this.state.userNumber);
    const disabled = !(this.state.userName && this.state.userNumber)
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
          value={this.state.userName}
        />
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('userNumber')}
          placeholder="Your phone number"
          value={this.state.userNumber}
        />
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('comment')}
          placeholder="Notes"
          value={this.state.comment}
        />
        <select
          className="iteminput"
          onChange={this.handleProp('readyTime')}
          value={this.state.readyTime}
        >
          <option value="ASAP" defaultValue>Pick up asap...</option>
          <option value="in 15 minutes">Pick up in 15 mins</option>
          <option value="in 30 minutes">Pick up in 30 mins</option>
          <option value="in 45 minutes">Pick up in 45 mins</option>
          <option value="in 1 hour">Pick up in 1 hour</option>
        </select>
        <button
          className="button"
          type="submit" disabled={disabled}>
          Next
        </button>
      </form>
    )
  }
}

export default UserForm

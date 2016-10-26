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
    orderCoffees.map((coffee) => {
      if (coffee.image in orderCoffees) {
        delete coffee.image
      }
    })
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
    // navigator.geolocation.watchPosition(function(position) {
    //   console.log("i'm tracking you!");
    // },
    // function (error) {
    //   if (error.code == error.PERMISSION_DENIED)
    //       console.log("you denied me :-(");
    // });
    navigator.geolocation.getCurrentPosition((position, error) => {
      console.log('getCurrentPosition', position);
      var userCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
      this.props.createOrder(order, userCoords)
    },(error) => {
        console.log("you denied me :-(");
        this.props.createOrder(order, { lat: '-41.2969092', lng: '174.7720306' })
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
          value={this.props.customer.name}
        />
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('userNumber')}
          placeholder="Your phone number"
          value={this.props.customer.phone}
        />
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('comment')}
          placeholder="Notes"
          value={this.props.customer.comment}
        />
        <select
          className="iteminput"
          onChange={this.handleProp('readyTime')}
          value={this.props.customer.ready_time}
        >
          <option value="ASAP" defaultValue>Pick up asap...</option>
          <option value="in 15 minutes">Pick up in 15 mins</option>
          <option value="in 30 minutes">Pick up in 30 mins</option>
          <option value="in 45 minutes">Pick up in 45 mins</option>
          <option value="in 1 hour">Pick up in 1 hour</option>
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

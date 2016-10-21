import React, { Component } from 'react'

class TestForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      phoneNumber: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handlePhNum = this.handlePhNum.bind(this)
  }

  handleName (e) {
    this.setState({userName: e.target.value})
    console.log('logged username', this.state.userName)
  }

  handlePhNum (e) {
    this.setState({phoneNumber: e.target.value})
    console.log('logged phoneNumber', this.state.phoneNumber)
  }

  render () {
    return (
      <form>
        <input type="text" id="user-name" onChange={this.handleName} placeholder="Name" />
        <input type="text" id="user-phone" onChange={this.handlePhNum} placeholder="Phone Number" />
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default TestForm

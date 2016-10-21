import React, { Component } from 'react'

class TestForm extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form>
        <input type="text" id="user-name" placeholder="Name" />
        <input type="text" id="user-phone" placeholder="Phone Number" />
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default TestForm

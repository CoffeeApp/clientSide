import React, { Component } from 'react'


class CustomerDetails extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { customer } = this.props

    return (
      <div>
        <h2>Hey {customer.name}, check out the places nearby where you can grab your coffee order!</h2>
      </div>
    )
  }
}

export default CustomerDetails

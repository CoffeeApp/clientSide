import React from 'react'
import { hashHistory } from 'react-router'

class LinkCart extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    hashHistory.push('/coffees')
    this.props.updateScreen('cart')
  }

  render() {
    return (
      <svg
       className="navimageright"
       onClick={this.handleClick}
       viewBox="0 0 24 24">
       <path fill="#fff" d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
     </svg>
    )
  }
}

export default LinkCart

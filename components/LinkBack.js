import React from 'react'

class LinkBack extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.updateScreen('coffees')
  }

  render() {
    return (
      <svg
          className="navimageleft"
          onClick={this.handleClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path fill="#fff" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
      </svg>
    )
  }
}

export default LinkBack

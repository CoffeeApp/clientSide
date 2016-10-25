import React from 'react'

class ToggleButtons extends React.Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(e) {
      this.props.filterShops(e.target.id)
  }

  render() {
    const { customer, location } = this.props
    console.log('###############LOCATION.PATHNAME IN TOGGLEBUTTONS', location.pathname)

    return (
      <div>
        <div className="button" id="Price" onClick={this.handleProp}>Price</div>
        <div className="button" id="Distance" onClick={this.handleProp}>Distance</div>
      </div>
    )
  }
}

export default ToggleButtons

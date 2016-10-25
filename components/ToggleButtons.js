import React from 'react'

class ToggleButtons extends React.Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(e) {
      ('############################THIS PROPS FILTER SHOPS IN TOGGLEBUTTONS', this.props)
      this.props.filterShops(e.target.value)
  }

  render() {
    console.log('HERE IS LOCATION AT TOGGLEBUTTONS', this.props.location.pathname);
    const { customer } = this.props
    return (
      <div>
        <div className="button" value="Price" onClick={this.handleProp}>Price</div>
        <div className="button" value="Distance" onClick={this.handleProp}>Distance</div>
      </div>
    )
  }
}

export default ToggleButtons

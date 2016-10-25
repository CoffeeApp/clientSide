import React from 'react'

class ToggleButtons extends React.Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(e) {
      let inactive = []
      if (e.target.id === 'Price') {inactive = ['Distance', 'Alphabetically']}
      if (e.target.id === 'Distance') {inactive = ['Price', 'Alphabetically']}
      if (e.target.id === 'Alphabetically') {inactive = ['Price', 'Distance']}
      this.props.filterShops(e.target.id)
      document.getElementById(e.target.id + 'Toggle').setAttribute('d', 'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z')
      for (let element of inactive) {
        document.getElementById(element + 'Toggle').setAttribute('d', 'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z')
      }
  }

  render() {
    console.log('HERE IS LOCATION AT TOGGLEBUTTONS', this.props.location.pathname);
    const { customer } = this.props
    return (
      <div className="togglebuttons">
        <div className="radiotext">Sort by:</div>
        <svg
          id="Price"
          className="radiobutton"
          onClick={this.handleProp}
          viewBox="0 0 24 24"
        >
          <path
            id="PriceToggle"
            fill="#3f0000"
            d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
        <div className="radiotext">Price</div>
        <svg
          id="Distance"
          className="radiobutton"
          onClick={this.handleProp}
          viewBox="0 0 24 24"
        >
          <path
            id="DistanceToggle"
            fill="#3f0000"
            d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
        <div className="radiotext">Distance</div>
        <svg
          id="Alphabetically"
          className="radiobutton"
          onClick={this.handleProp}
          viewBox="0 0 24 24"
        >
          <path
            id="AlphabeticallyToggle"
            fill="#3f0000"
            d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
        <div className="radiotext">Alphabetically</div>
      </div>
    )
  }
}

export default ToggleButtons

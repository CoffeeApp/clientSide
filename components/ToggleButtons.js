import React from 'react'
import Toggle from './Toggle'

class ToggleButtons extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      group: ''
    }
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(action) {
    this.setState({ group: action })
    this.props.filterShops(action)
  }

  render() {
    return (
      <div className="togglebuttons">
        <div className="radiotext">Sort by:</div>
        <div onClick={() => this.handleProp('Price')}>
          <Toggle
            toggle={ this.state.group === 'Price' ? true : false }
            fill={'#3f0000'}
            text={'Price'}
          />
        </div>
        <div onClick={() => this.handleProp('Distance')}>
          <Toggle
            toggle={ this.state.group === 'Distance' ? true : false }
            fill={'#3f0000'}
            text={'Distance'}
          />
        </div>
        <div onClick={() => this.handleProp('Alphabetically')}>
          <Toggle
            toggle={ this.state.group === 'Alphabetically' ? true : false }
            fill={'#3f0000'}
            text={'Alphabetically'}
          />
        </div>
      </div>
    )
  }
}

export default ToggleButtons

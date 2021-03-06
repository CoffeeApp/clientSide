import React from 'react'
import { Match, hashHistory } from 'react-router'
import SelectShop from './SelectShop'
import Notification from './Notification'
import ToggleButtons from './ToggleButtons'
import Cart from './Cart'

class ShopsAndNotification extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {(this.props.screen === 'shops') ? <ToggleButtons {...this.props} /> : null }
        {(this.props.screen === 'shops') ? <SelectShop {...this.props} /> : null}
        { this.props.notification ? <Notification {...this.props} /> : null }
      </div>
    )
  }
}

export default ShopsAndNotification

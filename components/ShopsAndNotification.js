import React from 'react'
import { Match } from 'react-router'
import SelectShop from './SelectShop'
import Notification from './Notification'
import CustomerDetails from './CustomerDetails'
import ToggleButtons from './ToggleButtons'

class ShopsAndNotification extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log('###################### INSIDE SHOPSANDNOTIFICATIONS THIS.PROPS ################', this.props.filterShops)
    return (
      <div>
        <CustomerDetails {...this.props} />
        { (this.props.location.pathname === '/cafes') ? <ToggleButtons {...this.props} /> : null }
        <SelectShop {...this.props} />
        { this.props.notification ? <Notification {...this.props} /> : null }
      </div>
    )
  }
}

export default ShopsAndNotification

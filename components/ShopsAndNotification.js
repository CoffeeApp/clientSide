import React from 'react'
import SelectShop from './SelectShop'
import Notification from './Notification'
import CustomerDetails from './CustomerDetails'
import ToggleButtons from './ToggleButtons'

class ShopsAndNotification extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CustomerDetails {...this.props} />
        <SelectShop {...this.props} />
        { this.props.notification ? <Notification {...this.props} /> : null }
        <Match exactly pattern="/cafes" component={wrapComponent(ToggleButtons, {...this.props})} />
      </div>
    )
  }

}

export default ShopsAndNotification

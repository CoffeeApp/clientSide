import React from 'react'
import SelectShop from './SelectShop'
import Notification from './Notification'
import CustomerDetails from '../components/CustomerDetails'

class ShopsAndNotification extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CustomerDetails {...this.props}/>
        <SelectShop {...this.props} />
        { this.props.notification ? <Notification {...this.props} /> : null }
      </div>
    )
  }

}

export default ShopsAndNotification

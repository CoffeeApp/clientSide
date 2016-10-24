import React from 'react'
import Shop from './Shop'
import { fetchShops } from '../actioncreators'

class SelectShop extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { shops } = this.props
    return (
      <div className="itemscontainer">
        {shops.map((shop, index) => {
          return (
            <Shop key={index} shop={shop} {...this.props} />
          )
        })}
      </div>
    )
  }
}

export default SelectShop

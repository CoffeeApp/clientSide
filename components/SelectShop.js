import React from 'react'
import Shop from './Shop'
import _ from 'lodash'

class SelectShop extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updatePlaceholderText(this.props.location.pathname)
  }

  toggles(id, shops) {
    switch (id) {
      case 'Price':
      return _.sortBy(shops, [function(shop) { return shop.total }])
      case 'Distance':
      return _.sortBy(shops, [function(shop) { return shop.distance }])
      case 'Name':
      return _.sortBy(shops, [function(shop) { return shop.shop_name }])
      default:
      return shops
    }
  }

  render() {

    const { shops, searchWord, filterShopsId } = this.props
    var results = this.toggles(filterShopsId, shops)
    let filterBySearchTerm = results.filter((shop) => {
      return shop.shop_name.toLowerCase().includes(searchWord.toLowerCase())
    })

    return (
      <div className="itemscontainer">
        {filterBySearchTerm.map((shop, index) => {
          return (
            <Shop key={index} shop={shop} {...this.props} />
          )
        })
      }
      </div>
    )
  }
}

export default SelectShop

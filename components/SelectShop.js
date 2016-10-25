import React from 'react'
import Shop from './Shop'

class SelectShop extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updatePlaceholderText('/cafes')
  }

  render() {
    const { shops, searchWord } = this.props
        let filterResults = shops.filter((shop) => {
          return shop.shop_name.toLowerCase().includes(searchWord.toLowerCase())
        })
    return (
      <div className="itemscontainer">
        {filterResults.map((shop, index) => {
          return (
            <Shop key={index} shop={shop} {...this.props} />
          )
        })}
      </div>
    )
  }
}

export default SelectShop

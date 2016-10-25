import React from 'react'
import Shop from './Shop'

class SelectShop extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updatePlaceholderText(this.props.location.pathname)
  }

  comparePrice(a, b) {
    if (a.total < b.total) return -1
    if (a.total > b.total) return 1;
    return 0;
  }

  compareDistance(a, b) {
    if (a.distance < b.distance) return -1
    if (a.distance > b.distance) return 1;
    return 0;
  }

  compareAlphabetical(a, b) {
    if (a.shop_name < b.shop_name) return -1
    if (a.shop_name > b.shop_name) return 1;
    return 0;
  }

  render() {
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% THIS IN SELECTSHOP', this)
    // var toggles = ({this.props.filterShopsId}) => {
    //   switch (this.props.filterShopsId) {
    //     case 'Price':
    //     return shops.sort(compareByPrice())
    //     case 'byDistance':
    //     return shops.sort(compareDistance())
    //     case 'Alphabetically':
    //     return shops.sort(compareAlphabetical())
    //     default:
    //     return shops
    //   }
    // }

      console.log('##############$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%THISPROPSTODFGESARAERVTOGGLEBUTTONS', this.props)

    const { shops, searchWord } = this.props

        let filterBySearchTerm = shops.filter((shop) => {
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

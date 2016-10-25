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

    // const user = {
    //   hasClicked: 'byPrice'
    // }
    //
    //     function compare(a, b, type) {
    //     var compareOutput = switch {
    //       case type = 'price'
    //         return shops.sort(compare('price'))
    //       case user.hasClicked === 'byDistance':
    //         return shops.sort(compare('distance'))
    //       case user.hasClicked === 'Alphabetically':
    //         return shops.sort(compare('alphabetically'))
    //       }
    //     }
    //
    //     if (a.total < b.total)
    //       return -1;
    //     if (a.total > b.total)
    //       return 1;
    //     return 0;
    //     }

        // var toggles = switch {
        //   case user.hasClicked === 'byPrice':
        //     return shops.sort(compare('price'))
        //   case user.hasClicked === 'byDistance':
        //     return shops.sort(compare('distance'))
        //   case user.hasClicked === 'Alphabetically':
        //     return shops.sort(compare('alphabetically'))
        //   default
        //     return
        //   }

        let filterBySearchTerm = shops.filter((shop) => {
          return shop.shop_name.toLowerCase().includes(searchWord.toLowerCase())
        })

    return (
      <div className="itemscontainer">
        {filterBySearchTerm.map((shop, index) => {
          return (
            <Shop key={index} shop={shop} {...this.props} />
          )
        })}
      </div>
    )
  }
}

export default SelectShop

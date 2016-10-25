import React from 'react'
import LinkBack from './LinkBack'
import LinkCart from './LinkCart'

const SearchBar = ({order, screen, searchWord, updateSearchWord, placeholder}) => {
  return (
    <div className="navbar">
      <div className="row">
        <span className="logo">Caffeinati</span>
      </div>
      <div className="row">
        <div className="searchbarcontainer">
          {
            (screen === 'cart')
            ? <LinkBack />
            : null
          }
          <input
            className="searchbar"
            placeholder={placeholder.placeholder}
            type="text"
            value={searchWord}
            onChange={(e) => updateSearchWord(e.target.value)}
          />
          {
            (
              (Object.keys(order.orderCoffees).length > 0) &&
              (screen === 'coffees') || (screen === 'shops')
            )
            ? <LinkCart />
            : null
          }
        </div>
      </div>
    </div>
    )
  }


export default SearchBar

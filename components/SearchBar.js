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

// /*<img src="http://www.clker.com/cliparts/e/v/A/R/K/t/transparent-magnifying-glass-md.png" />*/
// style={{height:10px}}s

// import React, { Component } from 'react'
//
// class SearchBar extends Component {
//
//   constructor (props) {
//     super(props)
//   }
//   handleChange () {
//     this.props.onUserInput(
//       this.refs.filterTextInput.value
//     );
//   }
//   render () {
//     return (
//       <div>
//         <input type="text" ref="filterTextInput" name="searchName" placeholder="Search" onChange={this.handleChange.bind(this)}/>
//       </div>
//     )
//   }
//
// }
//
// // /*<img src="http://www.clker.com/cliparts/e/v/A/R/K/t/transparent-magnifying-glass-md.png" />*/
// // style={{height:10px}}
//
// export default SearchBar

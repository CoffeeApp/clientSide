import React from 'react'

const SearchBar = ({order, screen, searchWord, updateSearchWord, placeholder}) => {
  return (
    <div className="navbar">
      <div className="row">
        <span className="logo">Caffeinati</span>
      </div>
      <div className="row">
        <form className="searchbarcontainer">
          {
            (screen === 'cart')
            ? <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path fill="#fff" d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"/>
            </svg>
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
            ? <svg
                className="menuimage"
                viewBox="0 0 24 24">
                <path fill="#fff" d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
              </svg>
            : null
          }
        </form>
      </div>
    )
  }
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

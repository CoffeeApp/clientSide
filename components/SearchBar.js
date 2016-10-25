import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  render() {

    const { searchWord, updateSearchWord, placeholder } = this.props
    return (
      <div className="navbar">
        <div className="row">
          <span className="logo">Caffeinati</span>
        </div>
        <div className="row">
          <form className="searchbarcontainer">
            <input
              className="searchbar"
              placeholder={placeholder.placeholder}
              type="text"
              value={searchWord}
              onChange={(e) => updateSearchWord(e.target.value)}
            />
          </form>
        </div>
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

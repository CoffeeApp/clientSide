import React from 'react'
import { Link } from 'react-router'
import Coffee from './Coffee'

class SelectCoffee extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { coffees, searchWord } = this.props
    let filterResults = coffees.filter((coffee) => {
      return coffee.type.toLowerCase().includes(searchWord.toLowerCase())
    })

    return (
      <div>
        {filterResults.map((coffee, index) => {
          return (
            <Coffee key={index} coffee={coffee} {...this.props} />
          )
        })}
      </div>
    )
  }
}

export default SelectCoffee

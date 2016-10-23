import React from 'react'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'

class CoffeeAndCart extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
  	return (
      <div>
        <SelectCoffee />
        <Cart />
      </div>
		)
	}
}

export default CoffeeAndCart

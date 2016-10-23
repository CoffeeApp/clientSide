import React from 'react'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'

<<<<<<< 42364836bc564e6a1247611a1cddba491208ff45
const CoffeeAndCart = props => {
  console.log('PROPS', props)
  console.log('ORDER COFFEES', )
  return (
    <div>
      <SelectCoffee {...props} />
      { Object.keys(props.orderCoffees).length > 0 ? <Cart {...props} /> : null }
    </div>
  )
=======
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
>>>>>>> experimenting with wrapper component for SelectCoffee and Cart
}

export default CoffeeAndCart

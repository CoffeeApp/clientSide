import React from 'react'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'

<<<<<<< bfdf9a71416b95e98e865e5c4c88bf680634a66c
<<<<<<< 42364836bc564e6a1247611a1cddba491208ff45
=======
>>>>>>> search bar persists - Cart and SelectCoffee components on the same page together
const CoffeeAndCart = props => {
  console.log('PROPS', props)
  console.log('ORDER COFFEES', )
  return (
    <div>
      <SelectCoffee {...props} />
      { Object.keys(props.orderCoffees).length > 0 ? <Cart {...props} /> : null }
    </div>
  )
<<<<<<< bfdf9a71416b95e98e865e5c4c88bf680634a66c
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
=======
>>>>>>> search bar persists - Cart and SelectCoffee components on the same page together
}

export default CoffeeAndCart

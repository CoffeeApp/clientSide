import React, { Component } from 'react'
import CartItem from './CartItem'
import UserForm from './UserForm'
import { getCoffeeImage } from '../actioncreators'

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffees } = this.props.store.getState().orders[0]
		return (
			<div className="cart">
				{coffees.map((coffee, index) => {
					const coffeeImage = this.props.store.dispatch(getCoffeeImage(coffee.type))
					console.log(coffeeImage)
					return (
						<CartItem
							key={index}
							coffeeType={coffee.type}
							coffeeQty={coffee.qty}
							coffeeMilk={coffee.milk}
							coffeeSugar={coffee.sugar}
							coffeeImage={coffeeImage}
						/>
					)
				})}
				<div className="cartheader">
					{/* <UserForm /> */}
				</div>
			</div>
		)
	}
}

export default Cart

import React, { Component } from 'react'
import UserForm from './UserForm'
import CartItem from './CartItem'

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const coffees = this.props.orders.coffees
		return (
			<div className="cart">
				{coffees.map((coffee, index) => {
					return (
						<CartItem
							key={index}
							coffeeType={coffee.type}
							coffeeQty={coffee.qty}
							coffeeMilk={coffee.milk}
							coffeeSugar={coffee.sugar}
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

import React, { Component } from 'react'
import CartItem from './CartItem'
import UserForm from './UserForm'

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		const { coffees } = this.props.store.getState().order
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
					<UserForm coffees={coffees} store={store} />
				</div>
			</div>
		)
	}
}

export default Cart

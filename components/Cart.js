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
		console.log(this.props.store.getState().order)
		return (
			<div className="cartitems">
				{coffees.map((coffee, index) => {
					return (
						<CartItem
							key={index}
							coffeeId={coffee.id}
							coffeeType={coffee.type}
							coffeeQuantity={coffee.quantity}
							coffeeMilk={coffee.milk}
							coffeeSugar={coffee.sugar}
						/>
					)
				})}
				<div className="cartfooter">
					<UserForm coffees={coffees} store={store} />
				</div>
			</div>
		)
	}
}

export default Cart

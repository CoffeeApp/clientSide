import React, { Component } from 'react'
import CartItem from './CartItem'
import UserForm from './UserForm'

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		console.log('Props:')
		console.log(this.props)
		return (
			<div className="cartitems">
				{coffees.map((coffee, index) => {
					return (
						<CartItem key={index} />
					)
				})}
				<div className="cartfooter">
					<UserForm />
				</div>
			</div>
		)
	}
}

export default Cart

import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import UserForm from './UserForm'

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
	const { orderCoffees } = this.props
		return (
			<div className="cartitems">
				{Object.keys(orderCoffees).map((key, index) => {
					return (
						<CartItem coffee={orderCoffees[key]} key={index} id={key} {...this.props} />
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

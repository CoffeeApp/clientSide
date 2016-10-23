import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import UserForm from './UserForm'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees,
		searchWord: state.searchWord
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createOrder: (order) => {
			dispatch(createOrder(order))
		},
		addCoffeeToOrder: (coffeeId, coffeeType) => {
			dispatch(addCoffeeToOrder(coffeeId, coffeeType))
		},
		getOrderCoffees: () => {
			dispatch(getOrderCoffees())
		},
		changeQuantity: (id, quantity) => {
			dispatch(changeQuantity(id, quantity))
		},
		updateSearchWord: (word) => {
			dispatch(updateSearchWord(word))
		}
	}
}

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const coffees = this.props.order.orderCoffees
		return (
			<div className="cartitems">
				{Object.keys(coffees).map((key, index) => {
					return (
						<CartItem coffee={coffees[key]} key={index} id={key} {...this.props} />
					)
				})}
				<div className="cartfooter">
					<UserForm />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

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
	const { orderCoffees } = this.props
		return (
			<div className="cartitems">
				{Object.keys(orderCoffees).map((key, index) => {
					return (
						<CartItem
							key={index}
							coffee={orderCoffees[key]}
							id={key}
							changeOrderOptions={this.props.changeOrderOptions}
						/>
					)
				})}
				<div className="cartfooter">
					<UserForm {...this.props} />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

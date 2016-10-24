import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import {
	createOrder,
	addCoffeeToOrder,
	getOrderCoffees,
	changeOrderOptions,
	changeQuantity,
	updateSearchWord,
	fetchCoffees,
 	updateOrderWithShop,
	deleteCoffeeFromCart
} from '../actioncreators'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees,
		searchWord: state.searchWord,
		orderCoffees: state.order.orderCoffees,
		shops: state.shops
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
		changeOrderOptions: (id, changeType, changePayload) => {
			dispatch(changeOrderOptions(id, changeType, changePayload))
		},
		updateSearchWord: (word) => {
			dispatch(updateSearchWord(word))
		},
		fetchCoffees: () => {
			dispatch(fetchCoffees())
		},
		updateOrderWithShop: (orderId, shopId, shopName) => {
			dispatch(updateOrderWithShop(orderId, shopId, shopName))
		},
		deleteCoffeeFromCart: (coffee_id) => {
			dispatch(deleteCoffeeFromCart(coffee_id))
		}
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		hashHistory.push('/coffees')
		this.props.fetchCoffees()
	}

	render() {
		const { store, children, searchWord, updateSearchWord} = this.props
		return (
			<div id="wrapper">
				<SearchBar updateSearchWord={updateSearchWord} searchWord={searchWord} />
				<div className="dashboard">
					{React.Children.map(children, (child) => {
						return React.cloneElement(child, {...this.props})
					})}
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

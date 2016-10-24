import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import {
	fetchCoffees,
	updateSearchWord,
	addCoffeeToOrder,
	changeOrderOptions, // is this the same as updateOrder?
	createOrder,
	updateOrder, // is this the same as updateOrder?
 	showNotification,
	confirmOrder,
	cancelOrder,
	changeQuantity,
	fetchShops
	} from '../actioncreators'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees,
		searchWord: state.searchWord,
		shops: state.shops,
		notification: state.notification,
		orderCoffees: state.order.orderCoffees,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCoffees: () => {
			dispatch(fetchCoffees())
		},
		updateSearchWord: (word) => {
			dispatch(updateSearchWord(word))
		},
		addCoffeeToOrder: (coffeeId, coffeeType) => {
			dispatch(addCoffeeToOrder(coffeeId, coffeeType))
		},
		changeOrderOptions: (id, changeType, changePayload) => {
			dispatch(changeOrderOptions(id, changeType, changePayload))
		},
		createOrder: (order) => {
			dispatch(createOrder(order))
		},
		updateOrder: (shop) => {
			dispatch(updateOrder(shop))
		},
		showNotification: () => {
			dispatch(showNotification())
		},
		confirmOrder: (orderId, shopId) => {
			dispatch(confirmOrder(orderId, shopId))
		},
		cancelOrder: () => {
			dispatch(cancelOrder())
		},
		// fetchShops: () => {
		// 	dispatch(fetchShops()),
		fetchShops: (userCoords) => {
			dispatch(fetchShops(userCoords))
		}
		// deleteTask: (id) =>
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

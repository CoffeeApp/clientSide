import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import {
	createOrder,
	addCoffeeToOrder,
	getOrderCoffees,
	changeQuantity,
	updateSearchWord,
	fetchCoffees } from '../actioncreators'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'

import {api, orderService, shopService} from '../lib/api-dev'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees,
		searchWord: state.searchWord,
		orderCoffees: state.order.orderCoffees
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
		},
		fetchCoffees: () => {
			dispatch(fetchCoffees())
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
		console.log('this', this)
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

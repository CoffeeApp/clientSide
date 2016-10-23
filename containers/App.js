import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { createOrder, addCoffeeToOrder, getOrderCoffees, changeQuantity } from '../actioncreators'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees
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
		}
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		hashHistory.push('/coffees')
	}

	render() {
		const { store, children } = this.props
		return (
			<div id="wrapper">
				<NavBar />
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

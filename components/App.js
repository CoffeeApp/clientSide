import React, { Component } from 'react'
import NavBar from './NavBar'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'
// import SelectCafe from './SelectCafe'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

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
		}
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		browserHistory.push('/coffee')
	}

	render() {
		const { store, children } = this.props
		console.log('this', this)
		return (
			<div id="wrapper">
				<NavBar />
				<div className="dashboard">
				</div>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, {...this.props})
				})}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

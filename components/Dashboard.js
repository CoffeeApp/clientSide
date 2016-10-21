import React from 'react'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'
import SelectCafe from './SelectCafe'

class Dashboard extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<div>
				<SelectCoffee />
				<Cart />
				<SelectCafe />
			</div>
		)
	}
}

export default Dashboard

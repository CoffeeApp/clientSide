import React, { Component } from 'react'
import NavBar from './NavBar'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'
// import SelectCafe from './SelectCafe'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<div id="wrapper">
				<NavBar />
				<div className="dashboard">
					<SelectCoffee coffees={store.getState().coffees} />
					{/* <Cart /> */}
					{/* <SelectCafe /> */}
				</div>
			</div>
		)
	}
}

export default App

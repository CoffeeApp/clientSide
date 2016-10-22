import React, { Component } from 'react'
import Cart from './Cart'
import NavBar from './NavBar'
import SelectCoffee from './SelectCoffee'
// import SelectCafe from './SelectCafe'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="wrapper">
				<NavBar />
				<div className="dashboard">
					<SelectCoffee />
					<Cart />
					{/* <SelectCafe /> */}
				</div>
			</div>
		)
	}
}

export default App

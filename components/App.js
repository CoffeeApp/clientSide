import React from 'react'
import NavBar from './NavBar'
import SelectCoffee from './SelectCoffee'
// import Cart from './Cart'
import SelectCafe from './SelectCafe'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="wrapper">
				<NavBar />
				<div className="dashboard">
					{/* <SelectCoffee /> */}
					{/* <Cart /> */}
					<SelectCafe />
				</div>
			</div>
		)
	}
}

export default App

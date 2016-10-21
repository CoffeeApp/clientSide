import React from 'react'
import NavBar from './NavBar'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="wrapper">
				<NavBar />
				<Dashboard />
			</div>
		)
	}
}

export default App

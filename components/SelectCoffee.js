import React from 'react'
import Coffee from './coffee'

class SelectCoffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<div className="selectcoffee">
				<div className="itemscontainer">
					<Coffee />
				</div>
			</div>
		)
	}
}

export default SelectCoffee

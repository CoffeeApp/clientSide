import React from 'react'
import Cafe from './Cafe'

class SelectCafe extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<div className="selectcafe">
				<div className="itemscontainer">
					<Cafe />
					<Cafe />
				</div>
			</div>
		)
	}
}

export default SelectCafe

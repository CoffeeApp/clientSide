import React from 'react'

class Coffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<div className="item">
				<Coffee />
			</div>
		)
	}
}

export default Coffee

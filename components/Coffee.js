import React from 'react'

class Coffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffeeKey, coffeeType, coffeeImage, coffeeDescription } = this.props
		return (
			<div className="item">
				<img
					alt="coffee image"
					className="itemimage"
					src={coffeeImage}
				/>
				<div className="itemdetails">
					<div className="itemtitle">{coffeeType}</div>
					<div className="itemdescription">{coffeeDescription}</div>
				</div>
			</div>
		)
	}
}

export default Coffee

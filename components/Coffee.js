import React from 'react'

class Coffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffeeType, coffeeImage, coffeeDescription } = this.props
		console.log(coffeeType)
		return (
			<div className="item">
				<a className="itemcontainer">
					<img
						alt="coffee image"
						className="itemimage"
						src={coffeeImage}
					/>
					<div className="itemdetails">
						<div className="itemtitle">{coffeeType}</div>
						<div className="itemdescription">{coffeeDescription}</div>
					</div>
				</a>
			</div>
		)
	}
}

export default Coffee

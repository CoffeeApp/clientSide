import React from 'react'

class Coffee extends React.Component {

	constructor(props) {
		super(props)
		this.handleTouched = this.handleTouched.bind(this)
	}

	handleTouched(coffeeId, coffeeType) {
		console.log('Touched');
		this.props.store.dispatch({ type: 'ADD_COFFEE_TO_ORDER', payload: {
			coffee_id: coffeeId,
			type: coffeeType,
			quantity: 1,
			milk: '',
			sugar: 0
		} })
	}

	render() {
		const { store, coffeeId, coffeeType, coffeeImage, coffeeDescription } = this.props
		return (
			<div
				className="item"
				onClick={() => this.handleTouched(coffeeId, coffeeType)}
			>
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

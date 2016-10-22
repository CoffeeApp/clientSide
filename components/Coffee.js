import React from 'react'

class Coffee extends React.Component {

	constructor(props) {
		super(props)
		this.handleTouched = this.handleTouched.bind(this)
	}

	handleTouched(coffeeType) {
		return (e) => {
			this.props.store.dispatch({ type: 'ADD_COFFEE_TO_ORDER', payload: {
				type: coffeeType,
				qty: 1,
				milk: '',
				sugar: 0
			} })
		}
	}

	render() {
		const { key, store, coffeeType, coffeeImage, coffeeDescription } = this.props
		return (
			<div
				className="item"
				onClick={() => this.handleTouched({coffeeType})}
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

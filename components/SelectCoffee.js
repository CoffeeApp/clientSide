import React from 'react'
import Coffee from './Coffee'

class SelectCoffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffees } = this.props
		return (
			<div className="selectcoffee">
				{coffees.map((coffee, index) => {
					return (
						<Coffee
							key={index}
							coffeeId={coffee.id}
							coffeeType={coffee.type}
							coffeeImage={coffee.image}
							coffeeDescription={coffee.description}
						/>
					)
				})}
			</div>
		)
	}
}

export default SelectCoffee

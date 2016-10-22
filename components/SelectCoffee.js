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
				{coffees.map((mycoffee) => {
					return (
						<Coffee
							key={mycoffee.id}
							coffeeType={mycoffee.type}
							coffeeImage={mycoffee.image}
							coffeeDescription={mycoffee.description}
						/>
					)
				})}
			</div>
		)
	}
}

export default SelectCoffee

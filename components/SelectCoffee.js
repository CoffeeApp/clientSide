import React from 'react'
import Coffee from './coffee'

class SelectCoffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffees } = this.props
		return (
			<div className="selectcoffee">
				<div className="itemscontainer">
					{coffees.map((coffee, index) => {
						<Coffee
							key={index}
							coffeeType={coffee.type}
							coffeeImage={coffee.image}
							coffeeDescription={coffee.description}
						/>
					})}
				</div>
			</div>
		)
	}
}

export default SelectCoffee

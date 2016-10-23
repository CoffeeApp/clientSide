import React from 'react'
import Coffee from './Coffee'

class SelectCoffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		console.log('SelectCoffee');
		console.log(this)
		const { coffees } = this.props
		return (
			<div className="selectcoffee">
				{coffees.map((coffee, index) => {
					return (
						<Coffee key={index} coffee={coffee} {...this.props} />
					)
				})}
			</div>
		)
	}
}

export default SelectCoffee

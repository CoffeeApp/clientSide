import React from 'react'
import { Link } from 'react-router'
import Coffee from './Coffee'

class SelectCoffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffees } = this.props
		var searchWord = this.props.searchWord
		let filterResults = coffees.filter((coffee) => {
			return coffee.type.toLowerCase().includes(searchWord.toLowerCase())
		})

		return (
			<div className="selectcoffee">
				{filterResults.map((coffee, index) => {
					return (
						<Link className="link" key={index} to="/cart">
							<Coffee key={index} coffee={coffee} {...this.props} />
						</Link>
					)
				})}
			</div>
		)
	}
}

export default SelectCoffee

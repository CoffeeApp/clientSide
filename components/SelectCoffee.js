import React from 'react'
import { Link } from 'react-router'
import Coffee from './Coffee'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees,
		searchWord: state.searchWord
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createOrder: (order) => {
			dispatch(createOrder(order))
		},
		addCoffeeToOrder: (coffeeId, coffeeType) => {
			dispatch(addCoffeeToOrder(coffeeId, coffeeType))
		},
		getOrderCoffees: () => {
			dispatch(getOrderCoffees())
		},
		changeQuantity: (id, quantity) => {
			dispatch(changeQuantity(id, quantity))
		},
		updateSearchWord: (word) => {
			dispatch(updateSearchWord(word))
		}
	}
}

class SelectCoffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffees, searchWord } = this.props
		console.log('coffees', coffees)
		let filterResults = coffees.filter((coffee) => {
			return coffee.type.toLowerCase().includes(searchWord.toLowerCase())
		})

		return (
			<div className="selectcoffee">
				{filterResults.map((coffee, index) => {
					return (
						<Coffee key={index} coffee={coffee} {...this.props} />
					)
				})}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCoffee)

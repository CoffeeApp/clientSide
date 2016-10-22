import api from '../lib/api'

function getCoffeeObject(coffeeId) {
	return (dispatch) => {
		api.service('coffees')
			.find({
				query: { id: coffeeId }
			})
			.then((actions) => {
				console.log(`AddCoffeeToOrder() | Coffee found: ${actions.data[0]}`)
				dispatch(addCoffeeToOrder(actions.data[0]))
			})
	}
}

export default {
	getCoffeeObject
}

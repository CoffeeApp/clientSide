import api from '../lib/api'

function getCoffeeImage(coffeeType) {
	return (dispatch) => {
		api.service('coffees')
			.find({
				query: { type: coffeeType }
			})
			.then((actions) => {
				dispatch({ type: 'GET_COFFEE_IMAGE', payload: actions.data[0].image })
			})
	}
}

export default {
	getCoffeeImage
}

import api from '../lib/api'

export function createOrder(order) {
	return (dispatch) => {
		api.service('orders')
			.create(order)
			.then(function (result) {
				dispatch({ type: 'RECEIVE_ORDER', payload: order })
			})
	}
}

export function addCoffeeToOrder(coffeeId, coffeeType) {
	return { type: 'ADD_COFFEE_TO_ORDER', payload: {
		coffee_id: coffeeId,
		type: coffeeType,
		quantity: 1,
		milk: '',
		sugar: 0
	} }
}

export function updateSearchWord (word) {
	return { type: 'UPDATE_SEARCHWORD', payload: word}
}

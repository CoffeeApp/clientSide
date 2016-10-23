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

export function addCoffeeToOrder(coffee_id, type) {
	return { type: 'ADD_COFFEE_TO_ORDER', payload: {
		coffee_id,
		type,
		quantity: 1,
		milk: '',
		sugar: 1
	} }
}

export function changeQuantity(id, change) {
	return { type: 'CHANGE_QUANTITY', payload: { id, change }
}

export function updateSearchWord (word) {
	return { type: 'UPDATE_SEARCHWORD', payload: word}
}

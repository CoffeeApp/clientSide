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

export function changeOrderOptions(id, changeType, changePayload) {
	return { type: 'CHANGE_ORDER_OPTIONS', payload: { id, changeType, changePayload } }
}

export function updateSearchWord(word) {
	return { type: 'UPDATE_SEARCHWORD', payload: word }
}

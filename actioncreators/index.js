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

export function fetchCoffees () {
	return (dispatch) => {
		api.service('coffees')
			.find()
			.then((result) => {
				console.log(result)
				dispatch(receiveCoffees(result.data))
			})
	}
}

function receiveCoffees (coffees) {
	return {type: "RECEIVE_COFFEES", payload: coffees}
}

export function fetchShops () {
	return (dispatch) => {
		api.service('shops')
			.find()
			.then((result) => {
				console.log(result)
				dispatch(receiveShops(result.data))
			})
	}
}

function receiveShops (shops) {
	return {type: "RECEIVE_SHOPS", payload: shops}
}

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

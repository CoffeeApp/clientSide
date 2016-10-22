import api from '../lib/api'

export default function createOrder(order) {
	return (dispatch) => {
		api.service('orders')
			.create(order)
			.then(function (result) {
				dispatch({ type: 'RECEIVE_ORDER', payload: order })
			})
	}
}

// function getCoffeeObject() {
// 	return (dispatch) => {
// 		api.service('coffees')
// 			.find({
// 				query: { id: coffeeId }
// 			})
// 			.then((actions) => {
// 				console.log(`AddCoffeeToOrder() | Coffee found: ${actions.data[0]}`)
// 				dispatch(addCoffeeToOrder(actions.data[0]))
// 			})
// 	}
// }

import initialState from '../state'

const coffees = (state = initialState.order, action) => {
	switch (action.type) {
		case 'ADD_COFFEE_TO_ORDER':
			const orderCoffeeId = Object.keys(state.orderCoffees).length
			return {
				orderCoffees: {
					...state.orderCoffees,
					[orderCoffeeId]: action.payload
				}
			}
		case 'CHANGE_ORDER_OPTIONS':
			return {
				orderCoffees: {
					...state.orderCoffees,
					[action.payload.id]: {
						...state.orderCoffees[action.payload.id],
						[action.payload.changeType]: action.payload.changePayload
					}
				}
			}
		case 'DELETE_COFFEE_FROM_ORDER':
		console.log("PETE Delete coffee", action.payload.coffee_id, 'orders ', state.orderCoffees);
		var orderCoffees = state.orderCoffees
		delete orderCoffees[action.payload.coffee_id]
			return {
				orderCoffees: orderCoffees
			}
		default:
			return state
	}
}

export default coffees

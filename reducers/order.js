import initialState from '../state'

const coffees = (state = initialState.order, action) => {
	switch (action.type) {
	case 'ADD_COFFEE_TO_ORDER':
		action.payload.orderCoffees_id = state.orderCoffees.length
		state.orderCoffees = [...state.orderCoffees, action.payload]
		console.log('New State:')
		console.log(state)
		return state
	case 'RECEIVE_ORDER':
		return action.payload
	default:
		return state
	}
}

export default coffees

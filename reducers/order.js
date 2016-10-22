import initialState from '../state'

const coffees = (state = initialState.order, action) => {
	switch (action.type) {
	case 'ADD_COFFEE_TO_ORDER':
		state.coffees = [...state.coffees, action.payload]
		return state
	case 'RECEIVE_ORDER':
		return action.payload
	default:
		return state
	}
}

export default coffees

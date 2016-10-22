import initialState from '../state'

const coffees = (state = initialState.order, action) => {
	switch (action.type) {
	case 'ADD_COFFEE_TO_ORDER':
		return [...state.coffees, ...action.payload]
	default:
		return state
	}
}

export default coffees

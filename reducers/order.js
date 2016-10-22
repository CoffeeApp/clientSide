import initialState from '../state'

const coffees = (state = initialState.order, action) => {
	switch (action.type) {
	case 'ADD_COFFEE_TO_ORDER':
		console.log([...state.coffees, action.payload])
		state.coffees = [...state.coffees, action.payload]
		return state
	default:
		return state
	}
}

export default coffees

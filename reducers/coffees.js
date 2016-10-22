import initialState from '../state'

const coffees = (state = initialState.coffees, action) => {
	switch (action.type) {
	case 'GET_COFFEES':
		return action.payload
	case 'GET_COFFEE_IMAGE':
		return action.payload
	default:
		return state
	}
}

export default coffees

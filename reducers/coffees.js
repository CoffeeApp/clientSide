import initialState from '../state'

const coffees = (state = initialState.coffees, action) => {
	switch (action.type) {
	case 'GET_COFFEES':
		return action.payload
	default:
		return state
	}
}

export default coffees

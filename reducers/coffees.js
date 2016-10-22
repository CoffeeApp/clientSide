import initialState from '../state'

const coffees = (state = initialState.coffees, action) => {
	switch (action.type) {
	case 'NOT_IN_USE':
		return action.payload
	default:
		return state
	}
}

export default coffees

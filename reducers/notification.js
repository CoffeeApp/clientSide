import initialState from '../state'

const notification = (state = initialState.notification, action) => {
	switch (action.type) {
	case 'NOTIFICATION':
		return action.payload
	default:
		return state
	}
}

export default notification

import initialState from '../state'

const shops = (state = initialState.shops, action) => {
	switch (action.type) {
	case 'RECEIVE_SHOPS':
		return action.payload
	default:
		return state
	}
}

export default shops

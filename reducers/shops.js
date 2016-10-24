import initialState from '../state'
import calculateDistance from '../lib/mapping'

function applyCurrentLocation (shops, userCoords) {
	console.log('SHOPS IN REDUCER!!!!!!', shops)
	return shops.map((shop) => {
		shop.distance = calculateDistance(shop, userCoords)
		return shop
	})
}

const shops = (state = initialState.shops, action) => {
	switch (action.type) {
	case 'RECEIVE_SHOPS':
		return applyCurrentLocation(action.payload.shops, action.payload.userCoords)
	default:
		return state
	}
}

export default shops

import { combineReducers } from 'redux'
import coffees from './coffees'
import order from './order'

export default combineReducers({
	coffees,
	order
})

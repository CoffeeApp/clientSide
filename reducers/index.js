import { combineReducers } from 'redux'
import coffees from './coffees'
import order from './order'
import searchWord from './searchword'

export default combineReducers({
	coffees,
	order,
	searchWord
})

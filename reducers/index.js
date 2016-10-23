import { combineReducers } from 'redux'
import coffees from './coffees'
import order from './order'
import shops from './shops'
import searchWord from './searchword'

export default combineReducers({
	coffees,
	order,
	shops,
	searchWord
})

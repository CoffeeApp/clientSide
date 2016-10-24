import { combineReducers } from 'redux'
import coffees from './coffees'
import order from './order'
import shops from './shops'
import searchWord from './searchword'
import notification from './notification'

export default combineReducers({
	coffees,
	order,
	shops,
	searchWord,
	notification
})

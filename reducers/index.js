import { combineReducers } from 'redux'
import coffees from './coffees'
import order from './order'
import shops from './shops'
import searchWord from './searchword'
import notification from './notification'
import placeholder from './placeholder'
import customer from './customer'

export default combineReducers({
  coffees,
  order,
  shops,
  searchWord,
  notification,
  placeholder,
  customer
})

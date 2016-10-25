import initialState from '../state'
import uuid from 'uuid'

const coffees = (state = initialState.order, action) => {
  switch (action.type) {
    case 'ADD_COFFEE_TO_CART':
      const orderCoffeeId = uuid.v4();
      return {
        orderCoffees: {
          ...state.orderCoffees,
          [orderCoffeeId]: action.payload
        }
      }
    case 'CHANGE_COFFEE_OPTIONS':
      return {
        orderCoffees: {
          ...state.orderCoffees,
          [action.payload.id]: {
            ...state.orderCoffees[action.payload.id],
            [action.payload.changeType]: action.payload.changePayload
          }
        }
      }
    case 'DELETE_COFFEE_FROM_CART':
      var orderCoffees = state.orderCoffees
      delete orderCoffees[action.payload.coffee_id]
      return {
        orderCoffees
      }
    case 'UPDATE_ORDER':
      return {orderCoffees: state.orderCoffees, ...action.payload}
    case 'UPDATE_ORDER_STATUS':
      return (state.order_id === action.payload.order_id)
      ? {...state, ...action.payload}
      : state
    default:
      return state
  }
}

export default coffees

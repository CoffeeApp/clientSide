import initialState from '../state'
import uuid from 'uuid'

const coffees = (state = initialState.order, action) => {
  switch (action.type) {
    case 'ADD_COFFEE_TO_ORDER':
      const orderCoffeeId = uuid.v4();
      return {
        orderCoffees: {
          ...state.orderCoffees,
          [orderCoffeeId]: action.payload
        }
      }
    case 'CHANGE_ORDER_OPTIONS':
      return {
        orderCoffees: {
          ...state.orderCoffees,
          [action.payload.id]: {
            ...state.orderCoffees[action.payload.id],
            [action.payload.changeType]: action.payload.changePayload
          }
        }
      }
    case 'UPDATE_ORDER':
      return {orderCoffees: state.orderCoffees, ...action.payload}
    case 'UPDATE_ORDER_STATUS':
      return {...state, ...action.payload}
    case 'DELETE_COFFEE_FROM_ORDER':
      var orderCoffees = state.orderCoffees
      delete orderCoffees[action.payload.coffee_id]
      return {
        orderCoffees
      }
    default:
      return state
  }
}

export default coffees

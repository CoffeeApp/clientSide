import initialState from '../state'

const orderHistory = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_ORDER_HISTORY':
    return action.payload
  default:
    return state
  }
}

export default orderHistory

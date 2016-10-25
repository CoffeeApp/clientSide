import initialState from '../state'

const customer = (state = {}, action) => {
  switch (action.type) {
  case 'SAVE_CUSTOMER_DETAIL':
    return action.payload
  default:
    return state
  }
}

export default customer

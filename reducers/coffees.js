import initialState from '../state'

const coffees = (state = initialState.coffees, action) => {
  switch (action.type) {
  case 'RECEIVE_COFFEES':
    return action.payload
  default:
    return state
  }
}

export default coffees

import initialState from '../state'

const coffees = (state = initialState.screen, action) => {
  switch (action.type) {
  case 'UPDATE_SCREEN':
    return action.payload
  default:
    return state
  }
}

export default coffees

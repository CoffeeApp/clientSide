import initialState from '../state'

const placeholder = (state = initialState.order, action) => {
  switch (action.type) {
    case 'SEND_ROUTE_TO_SEARCHBAR':
      var placeholderText = action.payload.route === '/coffees' ? "What coffee would you like to order?" : "Which cafe would you like to order from?"
      return {...state, placeholder: placeholderText }
    default:
      return state
  }
}

export default placeholder

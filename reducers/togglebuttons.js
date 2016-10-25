import initialState from '../state'

const toggleButtons = (state = initialState, action) => {
  switch (action.type) {
  case 'FILTER_SHOP_LIST':
    return action.payload.id
  default:
    return state
  }
}

export default toggleButtons

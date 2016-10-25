import initialState from '../state'

const toggleButtons = (state = initialState, id) => {
  switch (action.type) {
  case 'FILTER_SHOP_LIST':
    if (action.payload.id === 'Price' ) {
      
    } else if (action.payload.id === 'Distance' ) {

    }
  default:
    return state
  }
}

export default toggleButtons

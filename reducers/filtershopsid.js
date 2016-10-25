import initialState from '../state'

const filterShopsId = (state = initialState, action) => {
  switch (action.type) {
  case 'FILTER_SHOP_LIST':
    return action.payload
  default:
    return state
  }
}

export default filterShopsId

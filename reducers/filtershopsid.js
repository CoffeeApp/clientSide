import initialState from '../state'

const filterShopsId = (state = initialState, action) => {
  switch (action.type) {
  case 'FILTER_SHOP_LIST':
  console.log('ACTION ********** PAYLOAD *********** ID', action.payload.id)
    return action.payload.id
  default:
    return state
  }
}

export default filterShopsId

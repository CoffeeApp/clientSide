import initialState from '../state'

const searchWord = (state = initialState.searchWord, action) => {
  switch (action.type) {
  case 'UPDATE_SEARCHWORD':
    return action.payload
  default:
    return state
  }
}

export default searchWord

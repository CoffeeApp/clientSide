const searchWord = require('../reducers/searchword').default
const test = require('tape')
const initialState = require('../state')


test('testing searchInput is set from user', function (t) {
  const expected = 'flat white'
  const action = {
    type: 'UPDATE_SEARCHWORD',
    payload: expected
  }
  var actual = searchWord(initialState.searchWord, action)
  t.equal(actual, expected)
  t.end()
})

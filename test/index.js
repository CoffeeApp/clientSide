const test = require('tape')
const initialState = require('../state')
const coffees = require('../reducers/coffees').default
const searchWord = require('../reducers/searchword').default

test('testing clientSide', function (t) {
  t.ok(true)
  t.end()
})

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

test('testing that a coffee is being recieved after initial state change', function (t) {
  var coffee = {
    "id": 1,
    "type": "Short Black",
  }
  const action = {
    type: 'RECEIVE_COFFEES',
    payload: coffee
  }

  const expected = coffee
  const actual = coffees(initialState.coffees, action)
  t.equal(actual, expected)
  t.end()
})

test('testing that multiple coffees are being received', function (t) {
  const initialState =[ { "id": 1, "type": "Short Black"} ]
  const coffee =[ {"id": 4, "type": "Macchiato"}, {"id": 2, "type": "Flat White"} ]
  const action = {
    type: 'RECEIVE_COFFEES',
    payload: coffee
  }
  const expected = coffee
  const actual = coffees(initialState, action)
  t.deepEqual(actual, expected)
  t.end()
})

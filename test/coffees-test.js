const test = require('tape')
const initialState = require('../state')

const coffees = require('../reducers/coffees').default

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

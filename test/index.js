const test = require('tape')
const initialState = require('../state')
const coffees = require('../reducers/coffees').default
const searchWord = require('../reducers/searchword').default
const coffeeOrder = require('../reducers/order').default
const isuuid = require('isuuid')


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

test('testing that a coffee can be added to order', function (t) {
  const order =
  {
		coffee_id: 1,
		type: 'short black',
		quantity: 1,
		milk: '',
		sugar: 0
	}

  const action = {
    type: 'ADD_COFFEE_TO_CART',
    payload: order
  }
  const expected = order
  const actual = coffeeOrder(initialState.order, action)
  const uid = Object.keys(actual.orderCoffees)[0]
  t.equal(isuuid(uid), true)
  t.deepEqual(actual.orderCoffees[uid], expected)
  t.end()
})

test('testing that a coffee is being deleted from the cart', function (t) {
  const initial = {
    orderCoffees:
       { 'cdc7a911-84e6-4302-8b1a-ebb15b3bd673':
          { coffee_id: 1,
            type: 'short black',
            quantity: 1,
            milk: '',
            sugar: 0
           }
      }
  }

  const action =
  {
    type: 'DELETE_COFFEE_FROM_CART',
    payload: {coffee_id: 'cdc7a911-84e6-4302-8b1a-ebb15b3bd673'}
  }
  const expected = {orderCoffees: {}}
  const actual = coffeeOrder(initial, action)
  t.deepEqual(actual, expected)
  t.end()
})

const test = require('tape')
const initialState = require('../state')
const isuuid = require('isuuid')
const coffeeOrder = require('../reducers/order').default

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
    orderCoffees: {
      'cdc7a911-84e6-4302-8b1a-ebb15b3bd673':
      {
        coffee_id: 1,
        type: 'short black',
        quantity: 1,
        milk: '',
        sugar: 0
       }
    }
  }
  const action = {
    type: 'DELETE_COFFEE_FROM_CART',
    payload: {coffee_id: 'cdc7a911-84e6-4302-8b1a-ebb15b3bd673'}
  }
  const expected = {orderCoffees: {}}
  const actual = coffeeOrder(initial, action)
  t.deepEqual(actual, expected)
  t.end()
})

test('testing that the quantity of coffees can be changed', function (t) {

  const initial = {
    orderCoffees: {
      'iiuid':
      {
        coffee_id: 1,
        type: 'short black',
        quantity: 1,
        milk: '',
        sugar: 0
      }
    }
  }
  const action = {
    type: 'CHANGE_COFFEE_OPTIONS',
    payload: {
      id: 'iiuid',
      changeType: 'quantity',
      changePayload: initial.orderCoffees['iiuid'].quantity + 1
    }
  }
// test coffee quantity can be incremented
  var expected = initial
  expected.orderCoffees['iiuid'].quantity = 2

  var actual = coffeeOrder(initial, action)
  t.deepEqual(actual, expected)

// test coffee quantity can be decremented
  action.payload.changePayload = initial.orderCoffees['iiuid'].quantity - 1
  expected.orderCoffees['iiuid'].quantity = 1
  actual = coffeeOrder(initial, action)
  t.deepEqual(actual, expected)

  t.end()
})

test('testing that a milk option can be specified for a coffee order', function (t) {
  const initial = {
    orderCoffees: {
      'iiuid':
      {
        coffee_id: 1,
        type: 'short black',
        quantity: 1,
        milk: '',
        sugar: 0
      }
    }
  }
  const action = {
    type: 'CHANGE_COFFEE_OPTIONS',
    payload : {
      id: 'iiuid',
      changeType: 'milk',
      changePayload: 'Almond milk'
    }
  }
  var expected = initial
  expected.orderCoffees['iiuid'].milk = action.payload.changePayload
  var actual = coffeeOrder(initial, action)
  t.deepEqual(actual, expected)
  t.end()
})

test('testing that a sugar option can be specified for a coffee order', function (t) {
  const initial = {
    orderCoffees: {
      'iiuid':
      {
        coffee_id: 1,
        type: 'short black',
        quantity: 1,
        milk: '',
        sugar: 0
      }
    }
  }
  const action = {
    type: 'CHANGE_COFFEE_OPTIONS',
    payload : {
      id: 'iiuid',
      changeType: 'sugar',
      changePayload: '3'
    }
  }
  var expected = initial
  expected.orderCoffees['iiuid'].sugar = action.payload.changePayload
  var actual = coffeeOrder(initial, action)
  t.deepEqual(actual, expected)
  t.end()
})

test('testing that an order can be updated', function (t) {
  const initial = {
    orderCoffees: {
      'iiuid':
      {
        coffee_id: 1,
        type: 'short black',
        quantity: 1,
        milk: '',
        sugar: 0
      }
    }
  }
  const action = {
    type: 'UPDATE_ORDER',
    payload: {
      orderCoffees: {
        'iiuid2':
        {
          coffee_id: 2,
          type: 'espresso',
          quantity: 2,
          milk: 'Almond milk',
          sugar: 2
        }
      }
    }
  }
  const actual = coffeeOrder(initial, action)
  const expected = action.payload
  t.deepEqual(actual, expected)
  t.end()
})

// test.only('testing that an order status can be updated', function (t) {
//
//   const action = {
//     type: 'UPDATE_ORDER_STATUS',
//     payload: {
//       id: 'iiuid2'
//     }
//   }
//
// })

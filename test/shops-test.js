const test = require('tape')
const initialState = require('../state')
const shops = require('../reducers/shops').default

test.only('testing that shops will be received with geolocation distance information', function (t) {
  const initial =   [
    {
      lat: "-41.291544",
      lng: "174.773899"
    }
  ]

  const action = {
    type: 'RECEIVE_SHOPS',
    payload: {
      shops: initial,
      userCoords: {
        lat: '-41.2969092',
         lng: '174.7720306'
       }
    }
  }

  const expected = initial
  expected.distance = 617

  const actual = shops(initial, action)
  t.deepEqual(actual[0], expected[0])
  t.end()
})

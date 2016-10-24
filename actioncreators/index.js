import api from '../lib/api'

function receiveCoffees(coffees) {
  return { type: 'RECEIVE_COFFEES', payload: coffees }
}

export function fetchCoffees() {
  return (dispatch) => {
    api.service('coffees')
      .find()
      .then((result) => {
        const coffees = result.data.map((coffee) => (
          {...coffee, coffee_id: coffee.id}
        ))
        console.log('Fetch coffees: ', coffees)
        dispatch(receiveCoffees(coffees))
      })
  }
}

export function updateSearchWord(word) {
  return { type: 'UPDATE_SEARCHWORD', payload: word }
}

export function addCoffeeToOrder(coffee_id, type) {
  return { type: 'ADD_COFFEE_TO_ORDER', payload: {
    coffee_id,
    type,
    quantity: 1,
    milk: '',
    sugar: 0
  } }
}

export function changeOrderOptions(id, changeType, changePayload) {
  return { type: 'CHANGE_ORDER_OPTIONS', payload: { id, changeType, changePayload } }
}

export function createOrder(order) {
  return (dispatch) => {
    api.service('orders')
      .create(order)
      .then(function (result) {
        dispatch({ type: 'RECEIVE_SHOPS', payload: result })
      })
  }
}

export function updateOrder(shop) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_ORDER', payload: shop })
    dispatch(showNotification())
  }
}

export function showNotification() {
  return { type: 'NOTIFICATION', payload: true }
}

export function hideNotification() {
  return { type: 'NOTIFICATION', payload: false }
}

export function confirmOrder(order_id, shop_id) {
  return (dispatch) => {
    api.service('orders')
      .patch(order_id, {
        shop_id,
        status: 'received'
      })
      .then(function (result) {
        console.log('Order submitted: ', result)
        dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { status: 'In process' } })
      })
  }
}

export function cancelOrder() {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { status: 'Cancelled' } })
    dispatch(hideNotification())
  }
}

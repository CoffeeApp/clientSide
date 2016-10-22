const feathers = require('feathers-client')
const io = require('socket.io-client')
const socket = io('https://coffee-cloud.herokuapp.com/')

var api = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket))

// orderService stuff might need to happen elsewhere
// var orderService = api.service('coffees')
//
// orderService.on('created', function(order) {
//   console.log('someone created an order', order)
// })

export default {
	api
}

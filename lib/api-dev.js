const feathers = require('feathers-client')
const io = require('socket.io-client')
const socket = io('https://coffee-cloud.herokuapp.com/' || 'http://localhost:3030')

const app = feathers()
	.configure(feathers.hooks())
	.configure(feathers.socketio(socket))

// orderService stuff might need to happen elsewhere
var orderService = app.service('dumb-orders')

orderService.on('created', function(order) {
	console.log('someone created an order', order)
})

export {
	app,
	orderService
}

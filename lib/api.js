const feathers = require('feathers-client')
const io = require('socket.io-client')
const socket = io('http://192.168.1.8:3030' || 'https://coffee-cloud.herokuapp.com/')
// 'https://192.168.1.8:3030'

const api = feathers()
	.configure(feathers.hooks())
	.configure(feathers.socketio(socket))

export default api

// const feathers = require('feathers-client')
// const io = require('socket.io-client')
// const socket = io('http://192.168.1.8:3030' || 'https://coffee-cloud.herokuapp.com/')
//
// const api = feathers()
// 	.configure(feathers.hooks())
// 	.configure(feathers.socketio(socket))
//
// var orderService = api.service('dumb-orders')
// var shopService = api.service('shops');
//
// orderService.on('created', function(order) {
// 	console.log('someone created an order', order)
// })
//
// export {
// 	api,
// 	orderService,
// 	shopService
// }

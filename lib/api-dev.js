const feathers = require('feathers-client')
const io = require('socket.io-client')
const socket = io('http://192.168.1.84:3030' || 'https://coffee-cloud.herokuapp.com/')

const app = feathers()
	.configure(feathers.hooks())
	.configure(feathers.socketio(socket))

export default {
	app
}

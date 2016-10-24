const feathers = require('feathers-client')
const io = require('socket.io-client')
const socket = io('http://localhost:3030' || 'https://coffee-cloud.herokuapp.com/')
// 'https://192.168.1.8:3030'

const api = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket))

export default api

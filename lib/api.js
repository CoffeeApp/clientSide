const feathers = require('feathers-client')
const io = require('socket.io-client')
const socket = io('http://192.168.1.8:3030')
// remote server on same network 'https://192.168.1.8:3030'
// deployed url 'https://coffee-cloud.herokuapp.com/'
// local url 'http://localhost:3030'

const api = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket))

export default api

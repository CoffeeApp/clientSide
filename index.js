import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import initialState from './state'
import api from './lib/api'
import Root from './containers/Root'

const logger = createLogger({
  level: {
    prevState: () => `info`,
    error: () => `error`,
    nextState: () => `info`,
  },
  duration: true,
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type),
  }),
  colors: {
    prevState: () => `#FF0000`,
    nextState: () => `#4CAF50`,
  },
  diff: true
});

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger))
ReactDOM.render( <Root store={ store } />, document.querySelector('main'))

console.log('welcome to clientSide')

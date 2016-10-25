import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import initialState from './state'

import Root from './containers/Root'

const logger = createLogger({
  // predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN, // log all actions except AUTH_REMOVE_TOKEN
  level: {
    prevState: () => `info`,
    // action: ({ type }) => type === AUTH_SET_INFO ? `error` : `log`,
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
    // action: ({ type }) => type === AUTH_SET_INFO && `red`,
    nextState: () => `#4CAF50`,
  },
  diff: true
  // diffPredicate: (getState, action) => action.type === AUTH_SET_TOKEN,
});

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger))

ReactDOM.render(<Root store={ store } />, document.querySelector('main'))

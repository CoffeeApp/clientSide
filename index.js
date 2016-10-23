import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import initialState from './state'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import Root from './components/Root'
import App from './components/App'
import SelectCoffee from './components/SelectCoffee'

const store = createStore(reducer, initialState, applyMiddleware(thunk))

render(<Root store={ store } />, document.querySelector('main'))

console.log('welcome to clientSide')

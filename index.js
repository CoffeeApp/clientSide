import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import initialState from './state'

import App from './components/App'

const store = createStore(reducer, initialState, applyMiddleware(thunk))

const Main = () => {
	render(
		<App name='Coffee App' store={store} />, document.querySelector('main')
	)
}
store.subscribe(Main)
store.dispatch({ type: 'GET_COFFEES', payload: 10 })

console.log('welcome to clientSide')

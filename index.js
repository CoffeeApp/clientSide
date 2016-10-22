import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import initialState from './state'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import SelectCoffee from './components/SelectCoffee'

const store = createStore(reducer, initialState, applyMiddleware(thunk))

// allows us to add props to components
var wrapComponent = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  })
}

const Main = () => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={wrapComponent(App, { name: 'Coffee App', store: store})} />
		</Router>
	), document.querySelector('main')
	)
}
store.subscribe(Main)
store.dispatch({ type: 'GET_COFFEES', payload: 10 })

console.log('welcome to clientSide')

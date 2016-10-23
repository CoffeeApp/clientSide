import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import SelectCoffee from './SelectCoffee'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/coffee" component={SelectCoffee}/>
			</Route>
		</Router>
	</Provider>
)

export default Root

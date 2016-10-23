import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import App from './App'
import CoffeeAndCart from '../components/CoffeeAndCart'
// import SelectCoffee from '../components/SelectCoffee'
// import Cart from '../components/Cart'
// import SelectCafe from '../components/SelectCafe'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/coffee-select" component={CoffeeAndCart} />
				{/*}<Route path="/cart" component={Cart} />
			<Route path="/cafes" component={SelectCafe} /> */}
			</Route>
		</Router>
	</Provider>
)

export default Root

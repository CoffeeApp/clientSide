<<<<<<< HEAD
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'

=======
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
>>>>>>> 2ced177546f14f45acd8d6c39fa13bd8cbc01b3a
import SelectCoffee from '../components/SelectCoffee'
import Cart from '../components/Cart'
import SelectCafe from '../components/SelectCafe'

const Root = ({ store }) => (
<<<<<<< HEAD
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/coffees" component={SelectCoffee} />
				<Route path="/cart" component={Cart} />
				<Route path="/cafes" component={SelectCafe} />
			</Route>
		</Router>
	</Provider>
=======
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/coffee" component={SelectCoffee}/>
        <Route path="/cart" component={SelectCoffee}/>
        <Route path="/cafes" component={SelectCafe}/>
      </Route>
    </Router>
  </Provider>
>>>>>>> 2ced177546f14f45acd8d6c39fa13bd8cbc01b3a
)

export default Root

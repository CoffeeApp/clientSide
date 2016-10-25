import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import App from './App'
import CoffeeAndCart from '../components/CoffeeAndCart'
import ShopsAndNotification from '../components/ShopsAndNotification'
import CurrentOrders from '../components/CurrentOrders'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/coffees" component={CoffeeAndCart} />
        <Route path="/cafes" component={ShopsAndNotification} />
        <Route path="/orders" component={CurrentOrders} />
      </Route>
    </Router>
  </Provider>
)

export default Root

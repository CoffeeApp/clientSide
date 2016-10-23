import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import SelectCoffee from '../components/SelectCoffee'
import SelectCafe from '../components/SelectCafe'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/coffee" component={SelectCoffee}/>
        <Route path="/cart" component={SelectCoffee}/>
        <Route path="/cafes" component={SelectCafe}/>
      </Route>
    </Router>
  </Provider>
)

export default Root

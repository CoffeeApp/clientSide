import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import {
  fetchCoffees,
  updateScreen,
  updatePlaceholderText,
  updateSearchWord,
  addCoffeeToCart,
  changeCoffeeOptions,
  deleteCoffeeFromCart,
  createOrder,
  updateOrder,
  showNotification,
  hideNotification,
  confirmOrder,
  cancelOrder,
  updateOrderStatus
  } from '../actioncreators'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'

const mapStateToProps = (state) => {
  return {
    order: state.order,
    coffees: state.coffees,
    searchWord: state.searchWord,
    shops: state.shops,
    notification: state.notification,
    placeholder: state.placeholder,
    customer: state.customer,
    screen: state.screen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoffees: () => dispatch(fetchCoffees()),
    updateScreen: (screen) => dispatch(updateScreen(screen)),
    updatePlaceholderText: (route) => dispatch(updatePlaceholderText(route)),
    updateSearchWord: (word) => dispatch(updateSearchWord(word)),
    addCoffeeToCart: (coffeeId, coffeeType) => dispatch(addCoffeeToCart(coffeeId, coffeeType)),
    changeCoffeeOptions: (id, changeType, changePayload, orderCoffees) => dispatch(changeCoffeeOptions(id, changeType, changePayload, orderCoffees)),
    deleteCoffeeFromCart: (coffee_id, orderCoffees) => dispatch(deleteCoffeeFromCart(coffee_id, orderCoffees)),
    createOrder: (order, userCoords) => dispatch(createOrder(order, userCoords)),
    updateOrder: (shop) => dispatch(updateOrder(shop)),
    showNotification: () => dispatch(showNotification()),
    hideNotification: () => dispatch(showNotification()),
    confirmOrder: (orderId, shopId) => dispatch(confirmOrder(orderId, shopId)),
    cancelOrder: (orderId) => dispatch(cancelOrder(orderId)),
    updateOrderStatus: () => dispatch(updateOrderStatus())
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    hashHistory.push('/coffees')
    this.props.fetchCoffees()
  }

  render() {
    const { store, children } = this.props
    return (
      <div id="wrapper">
        <SearchBar {...this.props} />
        <div className="dashboard">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {...this.props})
          })}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

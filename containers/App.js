import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import {
  fetchCoffees,
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
  updateOrderStatus,
  findOrder
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
    customer: state.customer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoffees: () => dispatch(fetchCoffees()),
    updatePlaceholderText: (route) => dispatch(updatePlaceholderText(route)),
    updateSearchWord: (word) => dispatch(updateSearchWord(word)),
    addCoffeeToCart: (coffeeId, coffeeType) => dispatch(addCoffeeToCart(coffeeId, coffeeType)),
    changeCoffeeOptions: (id, changeType, changePayload) => dispatch(changeCoffeeOptions(id, changeType, changePayload)),
    deleteCoffeeFromCart: (coffee_id) => dispatch(deleteCoffeeFromCart(coffee_id)),
    createOrder: (order, userCoords) => dispatch(createOrder(order, userCoords)),
    updateOrder: (shop) => dispatch(updateOrder(shop)),
    showNotification: () => dispatch(showNotification()),
    hideNotification: () => dispatch(showNotification()),
    confirmOrder: (orderId, shopId) => dispatch(confirmOrder(orderId, shopId)),
    cancelOrder: (orderId) => dispatch(cancelOrder(orderId)),
    updateOrderStatus: () => dispatch(updateOrderStatus()),
    findOrder: () => dispatch(findOrder(phone))
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
    console.log('App.js', this.props)
    const { store, children, searchWord, updateSearchWord, placeholder, findOrder } = this.props
    return (
      <div id="wrapper">
        <SearchBar updateSearchWord={updateSearchWord} searchWord={searchWord} placeholder={placeholder} findOrder={findOrder} />
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

import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import {
  fetchCoffees,
  updateSearchWord,
  addCoffeeToCart,
  changeCoffeeOptions,
  deleteCoffeeFromCart,
  createOrder,
  updateOrder,
  showNotification,
  hideNotification,
  confirmOrder,
  cancelOrder
  } from '../actioncreators'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'

const mapStateToProps = (state) => {
  return {
    order: state.order,
    coffees: state.coffees,
    searchWord: state.searchWord,
    shops: state.shops,
    notification: state.notification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoffees: () => dispatch(fetchCoffees()),
    updateSearchWord: (word) => {
      dispatch(updateSearchWord(word))
    },
    addCoffeeToCart: (coffeeId, coffeeType) => {
      dispatch(addCoffeeToCart(coffeeId, coffeeType))
    },
    changeCoffeeOptions: (id, changeType, changePayload) => {
      dispatch(changeCoffeeOptions(id, changeType, changePayload))
    },
    deleteCoffeeFromCart: (coffee_id) => {
      dispatch(deleteCoffeeFromCart(coffee_id))
    },
    createOrder: (order, userCoords) => {
      dispatch(createOrder(order, userCoords))
    },
    updateOrder: (shop) => {
      dispatch(updateOrder(shop))
    },
    showNotification: () => {
      dispatch(showNotification())
    },
    hideNotification: () => {
    dispatch(showNotification())
    },
    confirmOrder: (orderId, shopId) => {
      dispatch(confirmOrder(orderId, shopId))
    },
    cancelOrder: () => {
      dispatch(cancelOrder())
    }
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
    const { store, children, searchWord, updateSearchWord} = this.props
    return (
      <div id="wrapper">
        <SearchBar updateSearchWord={updateSearchWord} searchWord={searchWord} />
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

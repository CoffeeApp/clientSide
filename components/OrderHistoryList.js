import React from 'react'

class OrderHistoryList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { order } = this.props
    const orderString = generateOrderString(order.coffees)
    return (
      <div className="item">
        <div className="itemtitle">{order.shop_name}</div>
        <div className="itemdescription">Order status: {order.status}</div>
        <div className="itemdescription">{orderString}</div>
      </div>
    )
    }
  }

  export default OrderHistoryList

  function generateSugarString(amount) {
    switch (amount) {
      case 0: return `no sugar`
      case '0': return `no sugar`
      case '1': return `1 sugar`
      default: return `${amount} sugars`
    }
  }

  function generateSuffix(orderLength, index) {
    let end = ''
    if (orderLength > index + 2) {
      end = ', '
    } else if (orderLength === index + 2) {
      end = ', and '
    }
    return end
  }

// Repeated at Confirm.js, needs refactoring—as so much else :) --MA
  function generateOrderString (coffees) {
    const orderString = coffees.map((coffee, index) => {
      const orderLength = coffees.length
      const quantity = (coffee.quantity === 1) ? 'a' : coffee.quantity
      const plural = (coffee.quantity > 1) ? 's' : ''
      const sugar = coffee.sugar
      const milkString = coffee.milk.toLowerCase()
      return `${quantity} ${coffee.type}${plural} with ${milkString} and ${generateSugarString(sugar)}${generateSuffix(orderLength, index)}`
    })
    return orderString
  }

import React from 'react'

class Confirm extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { order, confirmOrder, cancelOrder } = this.props
    const coffees = order.orderCoffees
    const orderPrice = order.total % 1 === 0 ? order.total : '' + order.total + 0
    const orderString = generateOrderString(coffees)
    return (
      <div className="confirm">
        <div className="notificationtitle">Confirm</div>
        <div className="notificationtext">
          Would you like to confirm your order with {order.shop_name} for {orderString} for a total of ${orderPrice}?
        </div>
        <div
          className="button"
          onClick={() => confirmOrder(order.order_id, order.shop_id)}
        >Yes</div>
        <div
          className="button"
          onClick={() => cancelOrder()}
        >No</div>
      </div>
    )
  }
}

export default Confirm

function generateSugarString(amount) {
  switch (amount) {
    case 0: return 'no sugar'
    case '0': return 'no sugar'
    case '1': return '1 sugar'
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

function generateOrderString (coffees) {
  const orderString = Object.keys(coffees).map((key, index) => {
    const orderLength = Object.keys(coffees).length
    const quantity = (coffees[key].quantity === 1) ? 'a' : coffees[key].quantity
    const sugar = coffees[key].sugar
    const milkString = (coffees[key].milk === '') ? 'no milk' : coffees[key].milk.toLowerCase()
    return `${quantity} ${coffees[key].type} with ${milkString} and ${generateSugarString(sugar)}${generateSuffix(orderLength, index)}`
  })

  return orderString
}

import React from 'react'

class Confirm extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { order, confirmOrder, cancelOrder } = this.props
    const coffees = order.orderCoffees
    const orderLength = Object.keys(coffees).length
    const orderString = Object.keys(coffees).map((key, index) => {
      const milk = coffees[key].milk
      const sugar = coffees[key].sugar
      const milkOrSugar = ((milk !== '') || (sugar > 0)) ? ' with ' : ''
      const milkString = (milk !== '') ? (milk) : ''
      const combiner = ((milk !== '') && (sugar > 0)) ? ' and ' : ''
      const sugarString = (sugar > 0) ? (sugar + ' sugars') : ''
      let end = ''
      console.log('orderLength: ' + orderLength + ' index: ' + index);
      if (orderLength > index + 2) {
         end = ', '
      }
      else if (orderLength === index + 2) {
         end = ', and '
      }
      return (coffees[key].quantity + ' ' + coffees[key].type + milkOrSugar + milk + combiner + sugarString + end)
    })
    return (
      <div className="confirm">
        <div className="notificationtitle">Confirm</div>
        <div className="notificationtext">
          Would you like to confirm your order with {order.shop_name} for {orderString} for a total of ${order.total}?
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

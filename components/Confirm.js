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
      console.log(milk);
      console.log(sugar);
      const hasMilk = ((milk !== '') && (milk !== 'none')) ? true : false
      const hasSugar = ((sugar > 0) && (sugar !== 'none')) ? true : false
      const milkString = hasMilk ? milk : 'no milk'
      let sugarString = ''
      if (sugar > 1) {
        sugarString = sugar + ' sugars'
      } else if (sugar === 1) {
        sugarString = sugar + ' sugar'
      } else {
        sugarString = ' no sugar'
      }
      let end = ''
      if (orderLength > index + 2) {
         end = ', '
      }
      else if (orderLength === index + 2) {
         end = ', and '
      }
      return (
        coffees[key].quantity
        + ' '
        + coffees[key].type
        + ' with '
        + milkString
        + ' and '
        + sugarString
        + end
      )
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

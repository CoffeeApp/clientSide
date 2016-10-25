import React from 'react'

class Confirm extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { order, confirmOrder, cancelOrder } = this.props
    return (
      <div className="confirm">
        <div className="notificationtitle">Confirm</div>
        <div className="notificationtext">
          Would you like to confirm your order with {order.shop_name} for X coffees for a total of ${order.total}?
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

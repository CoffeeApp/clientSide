import React from 'react'

const Confirm = ({ order, confirmOrder, cancelOrder }) => (
  <div className="confirm">
    <div className="notificationtitle">Confirm</div>
    <div className="notificationtext">
      Would you like to confirm your order with {order.shop_name}?
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

export default Confirm

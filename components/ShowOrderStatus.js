import React from 'react'

const ShowOrderStatus = ({ order }) => (
  <div className="showorderstatus">
    <div className="notificationtitle">Order Confirmed</div>
    <div className="notificationtext">
      Your order is currently:
    </div>
    <div className="notificationstatus">{order.status}</div>
    <div className="notificationtext">
      Your order status will change once your order is ready.
    </div>
  </div>
)

export default ShowOrderStatus

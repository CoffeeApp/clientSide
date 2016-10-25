import React from 'react'
import Confirm from './Confirm'
import ShowOrderStatus from './ShowOrderStatus'

const Notification = ({ order, confirmOrder, cancelOrder }) => (
  <div className="notification">
    <div className="module">
      // ternary refactor newlines
      { order.status === 'In process' ?
        <ShowOrderStatus order={order} /> :
        <Confirm order={order} confirmOrder={confirmOrder} cancelOrder={cancelOrder} />
      }
    </div>
  </div>
)

export default Notification

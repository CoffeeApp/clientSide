import React from 'react'

const ShowOrderStatus = ({ order }) => (
   <div className="showorderstatus">
      <div className="notificationtitle">Confirm</div>
      <div className="notificationtext">
         Your order is currently:
      </div>
      <div className="notificationstatus">{order.status}</div>
   </div>
)

export default ShowOrderStatus

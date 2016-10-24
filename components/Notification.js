import React from 'react'

const Notification = ({ order, confirmOrder, cancelOrder }) => (
	<div className="notification">
		<div className="module">
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
		</div>
	</div>
)

export default Notification

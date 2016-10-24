import React from 'react'
import CartItemCounter from './CartItemCounter'
import CartItemOptions from './CartItemOptions'

const CartItem = ({coffee, id, changeOrderOptions}) => (
	<div className="cartitem">
		<div className="itemoverview">
			<img
				className="itemimage"
				src="https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg"
			/>
			<div className="itemdetails">
				<div className="itemtitle">{coffee.type}<a className="remove-comment">&times;</a></div>
				<CartItemCounter coffee={coffee} id={id} changeOrderOptions={changeOrderOptions} />
			</div>
		</div>
		<CartItemOptions coffee={coffee} id={id} changeOrderOptions={changeOrderOptions} />
	</div>
)

export default CartItem

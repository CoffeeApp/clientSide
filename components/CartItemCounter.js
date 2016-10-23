import React, { Component } from 'react'

class CartItemCounter extends Component {

	constructor(props) {
		super(props)
		this.handleProp = this.handleProp.bind(this)
	}

	handleProp(prop) {
		const { coffee, id } = this.props
		return (e) => {
			let change = (prop === 'increment') ? 1 : -1
			this.props.changeOrderOptions(id, 'quantity', change)
		}
	}

	render() {
		const { coffee } = this.props
		return (
			<div>
				<div className="itemquantity">{coffee.quantity}</div>
				<img
					className="quantity"
					id="counterButtonsPlus"
					onClick={this.handleProp('increment')}
					src="http://iconshow.me/media/images/ui/ios7-icons/png/512/plus-empty.png"
				/>
				<img
					className="quantity"
					id="counterButtonsMinus"
					onClick={this.handleProp('decrement')}
					src="http://iconshow.me/media/images/ui/ios7-icons/png/512/minus-empty.png"
				/>
			</div>
		)
	}
}

export default CartItemCounter

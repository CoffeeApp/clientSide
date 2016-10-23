import React from 'react'
import CoffeeCounter from './CoffeeCounter'

class CartItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffeeType, coffeeQuantity, coffeeMilk, coffeeSugar } = this.props
		return (
			<div className="cartitem">
				<div className="itemoverview">
					<img
						className="itemimage"
						src="https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg"
					/>
					<div className="itemdetails">
						<div className="itemtitle">{coffeeType}</div>
						<CoffeeCounter coffeeName={coffeeType} coffeeQuantity={coffeeQuantity} />
					</div>
				</div>
				<form className="itemform">
					<select className="iteminput">
							<option value="">Select milk...</option>
							<option value="none">None</option>
							<option value="whole milk">Whole milk</option>
							<option value="trim milk">Trim milk</option>
							<option value="soy milk">Soy milk</option>
					</select>
					<select className="iteminput">
							<option value="">Add sugar...</option>
							<option value="none">None</option>
							<option value="1">1 sugar</option>
							<option value="2">2 sugars</option>
							<option value="3">3 sugars</option>
					</select>
				</form>
			</div>
		)
	}

}

export default CartItem

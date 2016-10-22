import React from 'react'
import CoffeeCounter from './CoffeeCounter'

class CartItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffeeType, coffeeQty, coffeeMilk, coffeeSugar } = this.props
		return (
			<div className="item">
				<div className="itemoverview">
					<a className="itemlink">
						<img
							className="itemimage"
							src="https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg"
						/>
					</a>
					<div className="itemdetails">
						<a className="itemlink">
							<div className="itemtitle">{coffeeType}</div>
						</a>
						<CoffeeCounter coffeeName={coffeeType} coffeeQty={coffeeQty} />
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

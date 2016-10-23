import React, { Component } from 'react'

class CartItemCounter extends Component {

	constructor(props) {
		super(props)
		this.handleProp = this.handleProp.bind(this)
	}

	handleProp(prop) {
		const { coffee, id } = this.props
		return (e) => {
			this.props.changeOrderOptions(id, prop, event.target.value)
		}
	}

	render() {
		const { coffee } = this.props
		return (
			<form className="itemform">
				<select className="iteminput" onChange={this.handleProp('milk')}>
						<option value="">Select milk...</option>
						<option value="none">None</option>
						<option value="whole milk">Whole milk</option>
						<option value="trim milk">Trim milk</option>
						<option value="soy milk">Soy milk</option>
				</select>
				<select className="iteminput" onChange={this.handleProp('sugar')}>
						<option value="">Add sugar...</option>
						<option value="none">None</option>
						<option value="1">1 sugar</option>
						<option value="2">2 sugars</option>
						<option value="3">3 sugars</option>
				</select>
			</form>
		)
	}
}

export default CartItemCounter

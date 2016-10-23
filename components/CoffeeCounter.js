import React, { Component } from 'react'

class CoffeeCounter extends Component {

	constructor(props) {
		super(props)
		this.state = {
			count: 1
		}
		this.handleProp = this.handleProp.bind(this)
	}

	handleProp(prop) {
		return (e) => {
			if (prop === 'increment') {
				this.setState({ count: this.state.count+1 }, function () {
					console.log(this.props.coffeeName, 'incremented to', this.state.count)
				})
			} else if (prop === 'decrement' && this.state.count >= 1) {
				this.setState({ count: this.state.count-1 }, function () {
					console.log(this.props.coffeeName, 'decremented to', this.state.count)
				})
			}
		}
	}

	render() {
		return (
			<div>
				<div className="itemquantity">{this.state.count}</div>
				<img
					className="quantity"
					id="counterButtonsPlus"
					onClick={this.handleProp('increment')}
					src="http://iconshow.me/media/images/ui/ios7-icons/png/512/plus-outline.png"
				/>
				<img
					className="quantity"
					id="counterButtonsMinus"
					onClick={this.handleProp('decrement')}
					src="http://iconshow.me/media/images/ui/ios7-icons/png/512/minus-outline.png"
				/>
			</div>
		)
	}
}

export default CoffeeCounter

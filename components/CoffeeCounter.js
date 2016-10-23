import React, { Component } from 'react'

class CoffeeCounter extends Component {

	constructor (props) {
		super(props)
		this.state = {
			count: 1
		}
		this.handleProp = this.handleProp.bind(this)
	}

	handleProp (prop) {
		return (e) => {
			if (prop === 'increment') {
				this.setState({count: this.state.count+1}, function () {
					console.log(this.props.coffeeName, 'incremented to', this.state.count)
				})
			} else if (prop === 'decrement' && this.state.count >= 1) {
				this.setState({count: this.state.count-1}, function () {
					console.log(this.props.coffeeName, 'decremented to', this.state.count)
				})
			}
		}
	}

	render () {
		return (
			<div className="row">
				<div className="itemquantity">{this.state.count}</div>
				<a className="itemlink"><img className="quantity" id="counterButtonsPlus" onClick={this.handleProp('increment')} src="https://iconshow.me/media/images/ui/ios7-icons/png/512/plus-outline.png" />
				</a>
				<a className="itemlink"><img className="quantity" id="counterButtonsMinus" onClick={this.handleProp('decrement')} src="https://iconshow.me/media/images/ui/ios7-icons/png/512/minus-outline.png" />
				</a>
			</div>
		)
	}
}

export default CoffeeCounter

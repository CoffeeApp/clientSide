import React, { Component } from 'react'
import { api } from '../lib/api'
import createOrder from '../actioncreators'
import { hashHistory } from 'react-router'

class UserForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			userNumber: '',
			comment: ''
		}
		this.handleProp = this.handleProp.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleProp(prop) {
		return e => {
			this.setState({[prop]:e.target.value})
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		let name = this.state.userName
		let phone = this.state.userNumber
		let comment = this.state.comment
		let orderCoffees = Object.keys(this.props.order.orderCoffees).map((key) => (
			this.props.order.orderCoffees[key]
		))
		let order = {
			details: {
				name,
				phone,
				status: 'new',
				comment
			},
			orderCoffees
		}
		this.props.createOrder(order)
		hashHistory.push('/cafe-select')
	}

	render () {
		return (
			<form
				className="itemform"
				onSubmit={this.handleSubmit}
			>
				<input
					className="iteminput"
					type="text"
					onChange={this.handleProp('userName')}
					placeholder="Your name"
				/>
				<input
					className="iteminput"
					type="text"
					onChange={this.handleProp('userNumber')}
					placeholder="Your phone number"
				/>
				<input
					className="iteminput"
					type="text"
					onChange={this.handleProp('comment')}
					placeholder="Notes"
				/>
				<button
					className="button"
					type="submit">
					Next
				</button>
			</form>
		)
	}
}

export default UserForm

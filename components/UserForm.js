import React, { Component } from 'react'
import { api } from '../lib/api'
import createOrder from '../actioncreators'

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
		let name = this.state.userName
		let phone = this.state.userNumber
		let comment = this.state.comment
		e.preventDefault()
		this.props.store.dispatch(createOrder({
			details: {
				name,
				phone,
				status: 'new',
				comment
			},
			coffees: this.props.coffees
		}))
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
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
					className="button next"
					type="submit">
					Next
				</button>
			</form>
		)
	}
}

export default UserForm

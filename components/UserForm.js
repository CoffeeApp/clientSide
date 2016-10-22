import React, { Component } from 'react'
import { api } from '../lib/api'

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
			//	 var state = {}
			//	 state[prop] = e.target.value
			this.setState({[prop]:e.target.value})
			console.log('input logged:', this.state)
		}
	}

	handleSubmit(e) {
		let name = this.state.userName
		let phone = this.state.userNumber
		let comment = this.state.comment
		e.preventDefault()
		api.service('orders')
			.create({
				order_id: 1,
				shop_id: 'Fidels Cafe',
				name,
				phone,
				comment,
				status: 'new',
				ordered: new Date(),
				coffees: [
					{
						type: 'Flat White',
						qty: 1,
						milk: 'trim',
						sugar: 1
					},
					{
						type: 'Americano',
						qty: 2,
						milk: 'soy',
						sugar: 0
					}
				]
			})
			.then(function(result){
				console.log('result', result)
			})
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

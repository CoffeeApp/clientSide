import React, { Component } from 'react'
import Cafe from './Cafe'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class SelectCafe extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props);
		const { shops } = this.props
		return (
			<div className="itemscontainer">
				{shops.map((shop, index) => {
					return (
						<Link className="link" key={index} to="/cart">
							<Cafe key={index} shop={shop} {...this.props} />
						</Link>
					)
				})}
			</div>
		)
	}
}

export default SelectCafe

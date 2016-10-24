import React from 'react'
import Shop from './Shop'

class SelectShop extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { shops } = this.props
		return (
			<div className="itemscontainer">
				{shops.map((shop, index) => {
					return (
						<Shop key={index} shop={shop} {...this.props} />
					)
				})}
			</div>
		)
	}
}

export default SelectShop

// OLD SELECTCAFE FOR REFERENCE
// import React, { Component } from 'react'
// import Cafe from './Cafe'
// import { Link } from 'react-router'
// import { connect } from 'react-redux'
// import { fetchShops } from '../actioncreators'
//
// class SelectCafe extends React.Component {
//
// 	constructor(props) {
// 		super(props)
// 	}
//
// 	componentDidMount() {
// 		this.props.fetchShops()
// 	}
//
// 	render() {
// 		const { shops } = this.props
// 		return (
// 			<div className="itemscontainer">
// 				{shops.map((shop, index) => {
// 					return (
// 						<Link className="link" key={index} to="/cart">
// 							<Cafe key={index} shop={shop}/>
// 						</Link>
// 					)
// 				})}
// 			</div>
// 		)
// 	}
// }
//
// export default SelectCafe

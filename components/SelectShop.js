import React from 'react'
import Shop from './Shop'
import { fetchShops } from '../actioncreators'

class SelectShop extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			var userCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
			this.props.fetchShops(userCoords)
		})
	}

	render() {
		const { shops } = this.props // this.props.shops!?
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
// 		navigator.geolocation.getCurrentPosition((position) => {
// 			var userCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
// 			this.props.fetchShops(userCoords)
// 		})
// 		// get shops
// 		// calculate distance from shop data
// 		// render shops w info
// 	}
//
// 	render() {
// 		const shops = this.props.shops
// 		console.log('SHOPS THROWING ERROR IN SELECTCAFE', shops)
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
// // removed className="selectcafe" from parent div

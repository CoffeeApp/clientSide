import React from 'react'
import SelectShop from './SelectShop'
import Notification from './Notification'

class ShopsAndNotification extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<SelectShop {...this.props} />
				{ this.props.notification ? <Notification {...this.props} /> : null }
			</div>
		)
	}

}

export default ShopsAndNotification

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

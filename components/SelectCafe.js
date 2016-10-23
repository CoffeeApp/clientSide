import React, { Component } from 'react'
import Cafe from './Cafe'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {fetchShops} from '../actioncreators'

const mapStateToProps = (state) => {
	return {
		shops: state.shops
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchShops: () => {
			dispatch(fetchShops())
		}
	}
}

class SelectCafe extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetchShops()
	}

	render() {
		const { shops } = this.props
		return (
			<div className="itemscontainer">
				{shops.map((shop, index) => {
					return (
						<Link className="link" key={index} to="/cart">
							<Cafe key={index} shop={shop}/>
						</Link>
					)
				})}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCafe)


// removed className="selectcafe" from parent div

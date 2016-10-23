import React, { Component } from 'react'
import Cafe from './Cafe'
import { map } from 'lodash'
import { Link } from 'react-router'
import {shopService} from '../lib/api-dev'

class SelectCafe extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			shops: []
		}
	}

	componentDidMount() {
		shopService.find().then(shopsData => {
			let data = shopsData.data
			return this.setState({shops: data})
    })
	}

	render() {
		const { store } = this.props
		const {shops} = this.state
		return (
			<div className="itemscontainer">
				{map(shops, (shop, index) => {
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

export default SelectCafe


// removed className="selectcafe" from parent div

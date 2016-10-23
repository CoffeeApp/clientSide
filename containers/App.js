import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import SelectCoffee from '../components/SelectCoffee'
import Cart from '../components/Cart'
// import SelectCafe from './SelectCafe'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { createOrder, updateSearchWord } from '../actioncreators'

const mapStateToProps = (state) => {
	return {
		order: state.order,
		coffees: state.coffees,
		searchWord: state.searchWord
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createOrder: (order) => {
			dispatch(createOrder(order))
		},
		updateSearchWord: (word) => {
			dispatch(updateSearchWord(word))
		}
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		browserHistory.push('/coffee')
	}

	render() {
		const { store, children, searchWord, updateSearchWord} = this.props
		console.log('this', this)
		return (
			<div id="wrapper">
				<SearchBar updateSearchWord={updateSearchWord} searchWord={searchWord} />
				<div className="dashboard">
					{React.Children.map(children, (child) => {
						return React.cloneElement(child, {...this.props})
					})}
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

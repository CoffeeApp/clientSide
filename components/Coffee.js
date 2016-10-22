import React from 'react'

class Coffee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		// const { store } = this.props
		return (
			<div className="item">
				<a className="itemcontainer">
					<img
						alt="coffee image"
						className="itemimage"
						src="/images/espresso.png"
					/>
					<div className="itemdetails">
						<div className="itemtitle">Coffee title</div>
						<div className="itemdescription">Description</div>
					</div>
				</a>
			</div>
		)
	}
}

export default Coffee

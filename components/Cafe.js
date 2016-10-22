import React from 'react'

class Cafe extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<div className="item">
				<a className="itemoverview">
					<img
						alt="Café"
						className="itemimage"
						src="/images/espresso.png"
					/>
					<div className="itemdetails">
						<div className="itemtitle">Fidel’s Café</div>
						<div className="itemdescription">178 Cuba St, Te Aro, Wellington 6011<br />Tel: 04 384-7014</div>
					</div>
					<div className="itemprice">$9.00</div>
				</a>
			</div>
		)
	}
}

export default Cafe

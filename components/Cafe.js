import React, { Component } from 'react'

class Cafe extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { coffee, store, shop, addCoffeeToOrder } = this.props
		return (
			<div
				className="item"
				onClick={() => addCoffeeToOrder(coffee.coffee_id, coffee.type)}
			>
				<img
					alt="coffee image"
					className="itemimage"
					src={shop.image}
				/>
				<div className="itemdetails">
					<div className="itemtitle">{shop.name}</div>
					<div>Phone: {shop.phone}</div>
					<div>Website: {shop.website}</div>
					<div>Rating: {shop.rating}</div>
					<div>TOTAL ORDER PRICE: $</div>
					<div>This store is __ away</div>
					<div className="itemdescription">{shop.description}</div>
				</div>
			</div>
		)
	}
}

export default Cafe

// <div className="item">
// 	<a className="itemoverview">
// 		<img
// 			alt="Café"
// 			className="itemimage"
// 			src="/images/espresso.png"
// 		/>
// 		<div className="itemdetails">
// 			<div className="itemtitle">Fidel’s Café</div>
// 			<div className="itemdescription">178 Cuba St, Te Aro, Wellington 6011<br />Tel: 04 384-7014</div>
// 		</div>
// 		<div className="itemprice">$9.00</div>
// 	</a>
// </div>

import React from 'react'

// const { coffee, store, shop, addCoffeeToOrder } = this.props
// (under render function in ES6 class-style notation)

const Shop = ({shop, updateOrder}) => (
	<div
		className="item"
		onClick={() => updateOrder(shop)}
		{/* onClick={() => addCoffeeToOrder(coffee.coffee_id, coffee.type)} */}
	>
		<img
			alt="coffee image"
			className="itemimage"
			src={shop.image}
		/>
		<div className="itemdetails">
			<div className="itemtitle">{shop.shop_name}</div>
			<div>Phone: {shop.shop_phone}</div>
			<div>Website: {shop.website}</div>
			<div>Rating: {shop.rating}</div>
			<div>Price: ${shop.total}</div>
			<div>This store is {shop.distance < 1000 ? '' + shop.distance + 'm' : '' + shop.distance/1000 + 'Km'} away</div>
			<div className="itemdescription">{shop.description}</div>
		</div>
	</div>
)

export default Shop

// import React, { Component } from 'react'
//
// class Cafe extends React.Component {
//
// 	constructor(props) {
// 		super(props)
// 	}
//
// 	render() {
// 		const { coffee, store, shop, addCoffeeToOrder } = this.props
// 		return (
// 			<div
// 				className="item"
// 				onClick={() => addCoffeeToOrder(coffee.coffee_id, coffee.type)}
// 			>
// 				<img
// 					alt="coffee image"
// 					className="itemimage"
// 					src={shop.image}
// 				/>
// 				<div className="itemdetails">
// 					<div className="itemtitle">{shop.name}</div>
// 					<div>Phone: {shop.phone}</div>
// 					<div>Website: {shop.website}</div>
// 					<div>Rating: {shop.rating}</div>
// 					<div>TOTAL ORDER PRICE: $</div>
// 					<div>This store is {shop.distance < 1000 ? '' + shop.distance + 'm' : '' + shop.distance/1000 + 'Km'} away</div>
// 					<div className="itemdescription">{shop.description}</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
//
// export default Cafe

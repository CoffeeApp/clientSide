import React from 'react'

// const { coffee, store, shop, addCoffeeToCart } = this.props
// (under render function in ES6 class-style notation)

//onClick={() => addCoffeeToCart(coffee.coffee_id, coffee.type)}
// ^ alternative onClick

const Shop = ({shop, updateOrder}) => (
  <div
    className="item"
    onClick={() => updateOrder(shop)}
  >
    <img
      alt="coffee image"
      className="itemimage"
      src={shop.image}
    />
    <div className="itemtitle">{shop.shop_name}</div>
    <div className="itemprice">${shop.total.toFixed(2)}</div>
    <div className="iteminfo">{shop.rating} of 5 stars</div>
    <div className="iteminfo">{shop.shop_phone}</div>
    <div className="iteminfo">{shop.website}</div>
    <div className="iteminfo">
      This store is <span className="distance">{shop.distance < 1000 ? '' + shop.distance + 'm' : '' + shop.distance/1000 + 'Km'}</span> away.
    </div>
    <div className="itemdescription">{shop.description}</div>
  </div>
)

export default Shop

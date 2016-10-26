import React from 'react'

const Shop = ({shop, updateOrder}) => (
  <div
    className="item"
    onClick={() => updateOrder(shop)}
  >
    <img
      alt={shop.shop_name}
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

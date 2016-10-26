import React from 'react'

const Coffee = ({coffee, addCoffeeToCart}) => (
  <div
    className="item"
    onClick={() => addCoffeeToCart(coffee.coffee_id, coffee.type, coffee.image)}
  >
    <img
      alt="coffee image"
      className="itemimage"
      src={coffee.image}
    />
    <div className="itemdetails">
      <div className="itemtitle">{coffee.type}</div>
      <div className="itemdescription">{coffee.description}</div>
    </div>
  </div>
)

export default Coffee

import React from 'react'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'

const CoffeeAndCart = props => {
  return (
    <div>
      <SelectCoffee {...props} />
      { Object.keys(props.orderCoffees).length > 0 ? <Cart {...props} /> : null }
    </div>
  )
}

export default CoffeeAndCart

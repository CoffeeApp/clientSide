import React from 'react'
import SelectCoffee from './SelectCoffee'
import Cart from './Cart'

const CoffeeAndCart = (props) => (
  <div>
    <SelectCoffee {...props} />
    {
       (
         (Object.keys(props.order.orderCoffees).length > 0) &&
         (props.screen === 'cart')
       )
       ? <Cart {...props} />
       : null
    }
  </div>
)

export default CoffeeAndCart

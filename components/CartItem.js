import React, { Component } from 'react'
import CartItemCounter from './CartItemCounter'
import CartItemOptions from './CartItemOptions'

class CartItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.deleteCoffeeFromCart(e.target.id, this.props.order.orderCoffees)
  }

  render () {
    const { coffee, id, deleteCoffeeFromCart } = this.props
    console.log('******** COFFEE *********');
    console.log(coffee);
    return (
      <div className="cartitem">
      <div className="itemoverview">
        <img src={coffee.image} className="itemimage" />
        <div className="itemdetails">
           <div className="itemtitle">
              {coffee.type}
              <a className="removeitem" id={id} onClick={this.handleClick}>&times;</a>
           </div>
           <CartItemCounter
              coffee={coffee}
              id={id}
              {...this.props}
           />
           </div>
        </div>
        <CartItemOptions coffee={coffee} id={id} {...this.props} />
      </div>
    )
  }
}

export default CartItem

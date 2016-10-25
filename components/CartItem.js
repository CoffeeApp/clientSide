import React, { Component } from 'react'
import CartItemCounter from './CartItemCounter'
import CartItemOptions from './CartItemOptions'

class CartItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    console.log(e.target)
    this.props.deleteCoffeeFromCart(e.target.id)
  }

  render () {
    const {coffee, id, changeOrderOptions, deleteCoffeeFromCart} = this.props
    return (
      <div className="cartitem">
      <div className="itemoverview">
      <img
      className="itemimage"
      src="https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg"
      />
      <div className="itemdetails">
      <div className="itemtitle">{coffee.type}<a className="removeitem" id={id} onClick={this.handleClick}>&times;</a></div>
      <CartItemCounter coffee={coffee} id={id} changeOrderOptions={changeOrderOptions} deleteCoffeeFromCart={deleteCoffeeFromCart}/>
      </div>
      </div>
      <CartItemOptions coffee={coffee} id={id} changeOrderOptions={changeOrderOptions} />
      </div>
    )
  }
}

export default CartItem

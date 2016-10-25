import React, { Component } from 'react'

class CartItemCounter extends Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(e) {
    const { coffee, order } = this.props
    const id = e.target.id
    if (e.target.alt == 'increment') {
      this.props.changeCoffeeOptions(id, 'quantity', (coffee.quantity+1), order.orderCoffees)
    } else if (coffee.quantity > 1 && e.target.alt == 'decrement') {
        this.props.changeCoffeeOptions(id, 'quantity', (coffee.quantity-1), order.orderCoffees)
    } else if (coffee.quantity === 1) {
      this.props.deleteCoffeeFromCart(e.target.id, order.orderCoffees)
    }
  }

  render() {
    const { coffee, id } = this.props
    return (
      <div>
        <div className="itemquantity">{coffee.quantity}</div>
        <img
          className="quantity"
          id={id}
          alt="increment"
          onClick={this.handleProp}
          src="http://iconshow.me/media/images/ui/ios7-icons/png/512/plus-empty.png"
        />
        <img
          className="quantity"
          id={id}
          alt="decrement"
          onClick={this.handleProp}
          src="http://iconshow.me/media/images/ui/ios7-icons/png/512/minus-empty.png"
        />
      </div>
    )
  }
}


export default CartItemCounter

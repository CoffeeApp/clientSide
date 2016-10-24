import React, { Component } from 'react'

class CartItemCounter extends Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(e) {
    const { coffee } = this.props
    const id = e.target.id
    if (coffee.quantity > 0 && e.target.alt == 'increment') {
      this.props.changeOrderOptions(id, 'quantity', (coffee.quantity+1))
    } else if (coffee.quantity >= 2 && e.target.alt == 'decrement') {
        this.props.changeOrderOptions(id, 'quantity', (coffee.quantity-1))
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

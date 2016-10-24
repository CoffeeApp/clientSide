import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import UserForm from './UserForm'

class Cart extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { orderCoffees } = this.props.order
    return (
      <div className="cart">
        <div className="cartitems">
          {Object.keys(orderCoffees).map((key, index) => {
            return (
              <CartItem
                key={index}
                coffee={orderCoffees[key]}
                id={key}
                changeOrderOptions={this.props.changeOrderOptions}
                {...this.props}
              />
            )
          })}
        </div>
        <div className="cartfooter">
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }
}

export default Cart

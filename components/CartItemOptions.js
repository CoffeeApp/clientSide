import React, { Component } from 'react'

class CartItemCounter extends Component {

  constructor(props) {
    super(props)
    this.handleProp = this.handleProp.bind(this)
  }

  handleProp(prop) {
    const { coffee, id, order } = this.props
    return (e) => {
      this.props.changeCoffeeOptions(id, prop, e.target.value, order.orderCoffees)
    }
  }

  render() {
    const { coffee } = this.props
    return (
      <div className="itemform">
        <select className="iteminput" onChange={this.handleProp('milk')} value={coffee.milk}>
            <option value="No milk">Select milk...</option>
            <option value="No milk">None</option>
            <option value="Whole milk">Whole milk</option>
            <option value="Trim milk">Trim milk</option>
            <option value="Almond milk">Almond milk</option>
            <option value="Soy milk">Soy milk</option>
        </select>
        <select className="iteminput" onChange={this.handleProp('sugar')} value={coffee.sugar}>
            <option value="No sugar">Add sugar...</option>
            <option value="No sugar">None</option>
            <option value="1">1 sugar</option>
            <option value="2">2 sugars</option>
            <option value="3">3 sugars</option>
        </select>
        <input
          className="iteminput"
          type="text"
          onChange={this.handleProp('note')}
          placeholder="Notes"
          value={coffee.note}
        />
      </div>
    )
  }
}

export default CartItemCounter

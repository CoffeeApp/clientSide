import React from 'react'
import CurrentOrderList from './CurrentOrderList'

class CurrentOrders extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        phone: ''
      }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({phone: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.findOrder(this.state.phone)
    this.setState({phone: ''})
  }

  render() {
    console.log("Here", this.props.findOrder)
    console.log("Here is orderhistory", this.props.orderHistory)
    const { orderHistory } = this.props
    return (
      <div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h4>Hello</h4>
        <form
          className="itemform"
          onSubmit={this.handleSubmit}
        >
          <input
            className="iteminput"
            type="text"
            placeholder="Enter phone number:"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button
            className="button"
            onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        {orderHistory.map((order, i) => {
          return <CurrentOrderList key={i} order={order} />
        })}
      </div>
    )
    }
  }

  export default CurrentOrders

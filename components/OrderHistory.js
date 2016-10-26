import React from 'react'
import OrderHistoryList from './OrderHistoryList'

class OrderHistory extends React.Component {

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
    this.setState({ phone: '' })
  }

  render() {
    const { orderHistory } = this.props
    return (
      <div className="item">
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
          return <OrderHistoryList key={i} order={order} />
        })}
      </div>
    )
    }
  }

  export default OrderHistory

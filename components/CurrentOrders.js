import React from 'react'
import CurrentOrderList from './CurrentOrderList'

class CurrentOrders extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({phone: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.findOrder(this.state.phone)
  }

  render() {
    console.log('currentorders', this.props)
    return (
      <div>
        <h1>Hello</h1>
        <h1>Hello</h1>

        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <form
          className="itemform"
          onSubmit={this.handleSubmit}
        >
          <input
            className="iteminput"
            type="text"
            placeholder="Enter order phone number"
            onChange={this.handleChange}
          />
          <button
            className="button"
            type="submit">
            Search
          </button>
        </form>
        <CurrentOrderList />
      </div>
    )
    }
  }

  export default CurrentOrders

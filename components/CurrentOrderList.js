import React from 'react'


class CurrentOrderList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { order } = this.props
    console.log('orderList ', this.props)
    return (
      <div className="item">
        <div className="itemdetails">
          <div className="itemtitle">{order.name}</div>
          <div className="itemtitle">{order.shop_name}</div>
          <div className="itemdescription">{order.status}</div>
        </div>
      </div>
    )
    }
  }

  export default CurrentOrderList

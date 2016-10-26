import React from 'react'
import { hashHistory } from 'react-router'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
})

const ShowOrderStatus = ({ order }) => (
 <div className="showorderstatus">
    <div className="notificationtitle">Confirmed</div>
    <div className="notificationtext">
       Your order is
    </div>
    <div className="notificationstatus">
      {
         ((order.processStatus === 'READY') || (order.processStatus === 'COMPLETE'))
         ? null
         : <div className="spinner">
               <MuiThemeProvider muiTheme={muiTheme}>
                  <CircularProgress size={30} color={'#3F0000'}/>
               </MuiThemeProvider>
            </div>
      }
      <div className="notificationstatustext">
        {order.processStatus ? order.processStatus : order.status}
      </div>
    </div>
    <div
      className="button"
      onClick={() => hashHistory.push('/orders')}
    >Order history</div>
 </div>
)

export default ShowOrderStatus

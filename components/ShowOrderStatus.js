import React from 'react'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})
console.log(muiTheme);
const ShowOrderStatus = ({ order }) => (
 <div className="showorderstatus">
    <div className="notificationtitle">Confirm</div>
    <div className="notificationtext">
       Your order is currently
    </div>
    <div className="notificationstatus">
      <div className="spinner">
        <MuiThemeProvider muiTheme={muiTheme}>
          <CircularProgress size={120} color={'#3F0000'}/>
        </MuiThemeProvider>
      </div>
      <div className="notificationstatustext">
        {order.processStatus ? order.processStatus : order.status}
      </div>
    </div>
 </div>
)

export default ShowOrderStatus

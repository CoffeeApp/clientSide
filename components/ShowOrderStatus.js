import React from 'react'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
console.log(muiTheme);
const ShowOrderStatus = ({ order }) => (
   <div className="showorderstatus">
      <div className="notificationtitle">Confirm</div>
      <div className="notificationtext">
         Your order is currently:
      </div>
      <div style={{margin: 'auto', width: '90px', position: 'relative', height: '120px'}}>
      <div  style={{ position: 'absolute', left: '-18px', top: '-8px'}}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <CircularProgress size={120} color={'#3F0000'}/>
        </div>
      </MuiThemeProvider>
      </div>
      <div className="notificationstatus" style={{position: 'absolute', textAlign: 'center', top: '40px'}}>{order.processStatus ? order.processStatus : order.status}</div>
      </div>
   </div>
)

export default ShowOrderStatus

var deg2rad = deg => {
  return deg * (Math.PI/180)
}

// const shopLocations = {
//   fidels: {lat:-41.291544, long:174.773899},
//   raglanRoast: {lat:-41.296834, long:174.776303},
//   preservatorium: {lat:-41.298061, long:174.773995}
// }

function calculateDistance (coords1, coords2) {
  const lat1 = coords1.lat
  const lon1 = coords1.lng
  const lat2 = coords2.lat
  const lon2 = coords2.lng

  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1);
  let a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  let d = R * c * 1000; // Distance in m
  return Math.round(d);
}

export default calculateDistance

function getDistance(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
module.exports.function = function findtheater (self,point) {
  const dummyData = require("./data/theater.js");
  const console = require('console');
  console.log(self)
  console.log(point)
  console.log(dummyData)
  let result = [];
  let distance = 0;

  for(let i = 0; i < dummyData.length; i++){
    distance = getDistance(point.point.latitude, point.point.longitude,
                           dummyData[i].point.point.latitude, dummyData[i].point.point.longitude);
    dummyData[i].distance = distance.toFixed(2);
    
    console.log(distance)
    

    dummyData[i].flag = true;
    result.push(dummyData[i]);
     
  }
  
  
  return result;
  }
  
 


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then( (result) => {
  const user = JSON.parse(result);
  return user[1];
})
.then( (user) => {
  const address = user.address;
  // console.log(address);
  return address;
})
.then( (address) => {
  const geo = address.geo;
  // console.log(geo);
  return geo;
} )
.then( (geo)=>{
  const lat = geo.lat;
  console.log(lat);
} )
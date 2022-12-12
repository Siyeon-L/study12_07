fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text() )
.then( result => {
  const users = JSON.parse(result);
  // console.log(users);
  const {id} = users[0];
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then(response => response.text())
  .then(posts => {
    console.log(posts);
  })
})
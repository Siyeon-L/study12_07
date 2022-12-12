fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then( (result) => {
  const users = JSON.parse(result);
  const {id} = users[0];
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
})
.then( item => item.text())
.then(posts=>{
  const number = JSON.parse(posts);
  const str = number[0];
  console.log(str.title);
})
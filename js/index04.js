const user = {
  userId : 4,
  title : 'title 추가 01',
  completed : true
}

fetch('https://jsonplaceholder.typicode.com/todos',
      {method: 'POST',
      body: JSON.stringify(user)})
.then((response) => response.text())
.then((result) => {console.log(result)})
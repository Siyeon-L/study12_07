const people = {
  userId : 9,
  title : 'title19',
  completed: true
}

fetch('https://jsonplaceholder.typicode.com/todos/120',
      {
        method: 'PUT',
        body:JSON.stringify(people) 
      })
.then( response => response.text() )
.then( (result) => {console.log(result)} )

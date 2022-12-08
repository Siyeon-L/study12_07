console.log('start');
console.log('start1');
fetch('https://jsonplaceholder.typicode.com/todos/3')
.then( item => item.text())
.then(result => console.log(result))
console.log('start2');
console.log('start3');
console.log('start4');
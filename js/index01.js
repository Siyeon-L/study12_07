fetch('https://jsonplaceholder.typicode.com/todos/1').
//text(): string, json(): promise 만들기 -> 파싱 에러
// then((response)=>{return response.text()})
then(response=>response.text()).
then(result => {console.log(result)})
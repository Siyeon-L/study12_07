fetch('https://jsonplaceholder.typicode.com/todos')
//text
.then(response => response.text())
//받은 파일 for in 문 결과 내보내기
.then(result => {
  // console.log(result);
  const level = JSON.parse(result);
  // console.log(level);
  const basic = level.filter( (item) => {return item.userId === 4 });
  // console.log(basic);
  for(let i in basic){
    document.write(
      `${basic[i].id} : ${basic[i].title}<br>`
      )
  };
})
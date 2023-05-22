const express = require('express');
const app = express();
app.set('PORT', 3000);

//  if( req.url === '/' &&  req.method === 'GET'){
const ary3 = ['바나나', '포도', '사과' , '오렌지'];
const animal = [
  { id: 50, name: '곰'},
  { id: 1, name: '호랑이'},
  { id: 34, name: '사자'},
  { id: 23, name: '여우'},
  { id: 101, name: '기린'}
]

app.get('/', (req, res)=>{
  // res.send('Hello World'); // 텍스트 응답
  // res.send('<h1>Hello World</h1>'); // 태그 응답
  // res.send({ id:1, name:'사자'}) // object, json로 응답
  // res.send( ary3 ); // 배열
  res.send( animal ); // 객체배열
})

app.listen(app.get('PORT'), ()=>{
    console.log("server start ",app.get('PORT'));
});


/*
미들웨어 : jQuery의 fadeIn()/animate() 처럼 함수가 만들어져 있음
요청 : post, get, delete, put(url, callback)
처리 : use, set
send( html, json, txt)


set : view engine(html), 서버환경(Port 번호, env)설정 등 설정할 때 사용 
*/
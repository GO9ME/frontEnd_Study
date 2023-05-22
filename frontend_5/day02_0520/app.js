// express : js 만들어진 서버 만드는 도구
const express = require('express');
const app = express();
// 서버 만들어짐, express의 다양한 미들웨어(함수)를 사용할 수 있음

//  if( req.url === '/' &&  req.method === 'GET'){
app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log("server start ", 3000)
});
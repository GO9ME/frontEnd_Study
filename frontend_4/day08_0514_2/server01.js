const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
      console.log( request.method,  request.url );
      response.statusCode = 200; 
      response.setHeader('Content-Type', 'text/html'); 
      response.write('<h1>hello nodejs</h1>'); 
      response.end(); 
})

// localhost:3000
// 127.0.0.1:3000
server.listen( 3000, ()=>{
      console.log( 'port 3000 on ');
})

// backend 에서 각각의 method 처리를 확인하는 툴
// postman
// thunder client :
// get 브라우저에서 확인가능하나 delete, update, post 는 확인 불가하므로 
// 확인하기 위한 툴 설치 
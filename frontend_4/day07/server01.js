const http  = require('http')
const fs = require('fs')

const server = http.createServer((request,response)=>{
    console.log(request.method,request.url)
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>hello nodejs</h1>');
    response.end();
})

server.listen(3000,()=>{
    console.log('port 3000 on')
})
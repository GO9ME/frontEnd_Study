const express = require('express');
const app = express(); 
const path = require('path');


app.set('PORT', 3000);

app.use(express.static(path.join(__dirname, 'public')));
// html페이지의 경로등을 자동 처리 : 유틸리티
// public 안에 있는 모든 코드를 자동으로 인식 
// <script src="script/jquery-3.6.4.min.js"></script>
// <link href="styles/ha_swap.css" rel="stylesheet" type="text/css">
// <img src="images/ha_logo.jpg" width="131" height="97" alt=""/>


// localhost:3000
app.get('/', (req, res)=>{
    const indexPath = path.join(__dirname, 'views', 'index.html');
    console.log(indexPath);
    res.sendFile(indexPath);
})

const { htmlPage } = require('./template/template');
const fs = require('fs');
app.get('/temp', (req, res)=>{
  //const str = htmlPage('node', 5, '한글은 아름다운 글입니다.', 'html');
  // file 파일 읽기 가능 
  fs.readdir( path.join(__dirname, 'public'), (err, filelist)=>{
    console.log(filelist); //[ 'images', 'script', 'styles' ]

    let title = 'NodeJs';
    let list  = filelist; 
    
    const str = htmlPage(title, list, '한글은 아름다운 글입니다.', 'html');
    res.send( str );
  })
  
})

// 브라우저 확인 불가하므로 thunder client처리
app.post('/', (req, res)=>{
   console.log('post');
   res.send('post')
})
app.delete('/', (req, res)=>{
   console.log('delete');
   res.send('delete');
})
app.put('/', (req, res)=>{
   console.log('put');
   res.send('put')
})

app.get('/jQuery', (req, res)=>{
  const jQueryHtml = path.join(__dirname, 'views', 'jindex_server.html');
  res.sendFile( jQueryHtml );
})

app.listen(app.get('PORT'), ()=>{
    console.log("server start ",app.get('PORT'));
});


/*
다양한 요청(request)에 대한 응답(response)
// 라우팅 작업

D:\frontend_5\day02_0520\app03.js:32
    let list  = [...fileList];
                ^

ReferenceError: fileList is not defined
    at D:\frontend_5\day02_0520\app03.js:32:17
    at FSReqCallback.oncomplete (node:fs:198:23)

Node.js v18.16.0

ITSC
*/
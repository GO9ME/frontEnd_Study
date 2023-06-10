const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use( express.static(path.join(__dirname, 'public')));

// req.body 읽어오도록 처리
app.use( express.json() ); // json
app.use( express.urlencoded({ extended : false }) ); // form input 처리
// 미들웨어로 next 등록
app.use((req, res, next)=>{
    console.log( req.method, req.path , new Date() );  /// 서버에 로고 남기기
    // GET /register 2023-06-03T08:44:33.715Z
    next();
})
 

// localhost:3000/index.html
// /index => localhost:3000/index
// ^/$ => localhost:3000/       
app.get('^/$|/index(.html)?', (req, res)=>{
    res.sendFile( path.join(__dirname, 'views', 'index.html'));
})

// localhost:3000/register
// localhost:3000/register.html
app.get('/register(.html)?', (req, res)=>{
    res.sendFile( path.join(__dirname, 'views', 'register.html'));
})

const users = [
  {
    userName:"은길동",
    userId:"eungildong",
    userEmail :"eun@naver.com",
    userPhone :"010-1224-5678",
    userPwd :"testtest(0"
  }
];

app.post('/register', (req, res)=>{
    const user = req.body;
    // console.log( user ); 

    const result = users.find(data=>{
      data.userId === user.userId && data.userEmail === user.userEmail
    })

    let resdata = {}
    // result 가 undefined, null === false 
    if( !result ){
        users.push( user );
        resdata = { success : true, message : '정상 등록되었습니다.'}
    }else{
        resdata = { success : false, message : '이미지 등록된 사용자 입니다.'}
    }

    res.send( resdata );
})

app.get('/login', (req, res)=>{
  res.sendFile( path.join(__dirname, 'views', 'login.html'));
})


app.post('/login', (req, res)=>{
    const { userId, userPwd } = req.body;
    console.log( userId, userPwd ); 

    const result = users.find(data=>
      data.userId === userId && data.userPwd === userPwd
    )

    let resdata = {}
    // result 가 하나 반드시 존재 로그인
    if( result ){
        resdata = { success : true, message : result.userName }
    }else{
        resdata = { success : false, message : '아이디나 비밀번호를 확인하세요.'}
    }

    res.send( resdata );
})
app.get('/searchid', (req, res)=>{
  res.sendFile( path.join(__dirname, 'views', 'searchId.html'));
})
app.get('/searchpwd', (req, res)=>{
  res.sendFile( path.join(__dirname, 'views', 'searchPwd.html'));
})

// 없는 라우트 접근시 표시할 페이지
// http://localhost:3000/hello
app.get('/*', (req, res)=>{
  res.status(404).sendFile( path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

// 로그, MVC 패턴 
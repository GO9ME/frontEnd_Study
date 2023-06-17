const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path'); 

const expressSession = require('express-session');  
const cookieParser  = require('cookie-parser');
app.use( cookieParser() ); 

app.use( express.static(path.join(__dirname, 'public')));
app.use( express.json() ); // json
app.use( express.urlencoded({ extended : false }) ); 
app.use((req, res, next)=>{
    let message = `${req.method}, ${req.path}`
    console.log( message ); // morgan, ... 
    next();
})

// 한글 때문에 문제 발생 
app.use(expressSession({ 
  secret:'my key', 
  resave: true,
  saveUninitialized:true,
  // cookie:{
  //     user:'한글',
  //     path:'/',
  //     maxAge : 10*1000,
  //     secure : false,
  //     httpOnly : false
  // }
}))

app.get('/', (req, res)=>{
  // if( req.session.cookie ){
  //    res.send('이미로그인 된 상태입니다.')
  // }else{
  //    res.session.cookie = {
  //       id : "new session",
  //       name : "코리아",
  //       authorized : true
  //    }
  //    res.end('로그인 되었습니다.');
  // }
  console.log(req.session);
})

app.post('/login', (req, res)=>{
    if( req.session.user ){
      console.log('이미 로그인 되서 root 로 이동')
      res.redirect('/');
    }else{
        res.session.user = {
          id : "new session",
          name : "코리아",
          authorized : true
        }
        res.end('로그인 되었습니다.');
    }
})
app.get('/logout', (req, res)=>{
    if( req.session.user ){
        req.session.destroy( err => console.log( err ));
        //req.session.destroy( console.log );
        console.log('로그아웃');
        res.send('로그아웃')
    } else {
        console.log('로그인 되어 있지 않습니다.')
        res.send('로그인 되어 있지 않습니다.')
    }
})

app.get('/*', (req, res)=>{
  res.status(404);
})


app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

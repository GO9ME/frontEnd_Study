const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path'); 
const users = require('./model/users.json');

// npm i jsonwebtoken
const jwt = require('jsonwebtoken');
  
const cookieParser  = require('cookie-parser');
app.use( cookieParser() ); 

// app.use((req, res, next)=>{
//   res.cookie('brand', 'korea');
//   next();
// })

app.use( express.static(path.join(__dirname, 'public')));

app.use( express.json() ); // json
app.use( express.urlencoded({ extended : false }) ); 
app.use((req, res, next)=>{
    let message = `${req.method}, ${req.path}`
    console.log( message ); // morgan, ... 
    next();
})
 
// login 요청 => 서버 accessToken 발급
app.post('/login', (req, res)=>{
    // id, pwd 
    const { userId, userPwd } = req.body; 
    // find 
    const find = users.find( data=> data.userId === userId && data.userPwd === userPwd );
    if(!find){
       res.status(403).send('사용자를 찾을 수 없습니다.')
    }else{
      try{
        // 2개의 토큰 : accessToken, refreshToken 
        // jwt.sign({사용자에대한쿠키}, '암호', {쿠키사용시간});
        // 로그인 용도
        const accesstoken = jwt.sign({
            userId:find.userId, 
            userPwd:find.userPwd,
            userEmail: find.userEmail
        }, 'ACCESS_SECRET', {
            expiresIn : '1m',
            issuer :'korea'
        });
        
        res.cookie("AccessToken", accesstoken, {
          secure:false,
          httpOnly:true
        })
        // accesstoken 갱신용
        const refreshtoken = jwt.sign({
            userId:find.userId, 
            userPwd:find.userPwd,
            userEmail: find.userEmail
        }, 'REFRESH_SECRET', {
            expiresIn : '24h',
            issuer :'korea'
        });
        res.cookie("RefreshToken", refreshtoken, {
          secure:false,
          httpOnly:true
        })
        res.status(200).json('login success');
      }catch(err){
          console.log( err );
          res.status(500).json('login error');
      }
    } 
}) 

// 복호화하여 유효 사용자인지 확인 하기 위함 
app.get('/accesstoken', (req, res)=>{
    try{
        const token = req.cookies.AccessToken;
        const confirm = jwt.verify(token, 'ACCESS_SECRET');
        // console.log( confirm );

        const find = users.find( data=> data.userEmail === confirm.userEamil );
        const { userPwd, ...others } = confirm; 
        console.log(userPwd, others);

        res.status(200).json(`user success ${others}`);
    }catch(err){
        console.log( err );
        res.status(500).json('accesstoken error');
    }
}) 


// 갱신 해주는 용도 
app.get('/refreshtoken', (req, res)=>{
    try{
        const token = req.cookies.RefreshToken;
        const confirm = jwt.verify(token, 'REFRESH_SECRET');
        // console.log( confirm );

        const find = users.find( data=> data.userEmail === confirm.userEmail );
        console.log
        const accesstoken = jwt.sign({
          userId:find.userId, 
          userPwd:find.userPwd,
          userEmail: find.userEmail
        }, 'ACCESS_SECRET', {
            expiresIn : '1m',
            issuer :'korea'
        });
        
        res.cookie("AccessToken", accesstoken, {
          secure:false,
          httpOnly:true
        })
        res.status(200).json('accesstoken reCreate');
    }catch(err){
        console.log( err );
        res.status(500).json('refreshtoken error');
    }
}) 
app.post('/logout', (req, res)=>{
    try{
        res.cookie('AccessToken', '');
        res.status(200).json('logout success');
    }catch(err){
        console.log( err );
        res.status(500).json('logout error');
    }
}) 


app.get('/*', (req, res)=>{
  res.status(404).sendFile( path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

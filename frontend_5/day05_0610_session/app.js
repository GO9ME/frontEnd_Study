const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const logEvents = require('./middleware/logEvent');
 
const register = require('./router/register');
const { getSearchid } = require('./control/login');
// const users = require('./model/users.json');
// 데이터를 조작해서 사용하기 불편

const cookieParser  = require('cookie-parser');
const expressSession = require('express-session');
app.use( cookieParser() ); 

  
// 세션 설정
app.use(expressSession({
	secret:'아무거나',
	resave:true,
	saveUninitialized:true,
  cookie: {
		user : 'foo',
		path:'/',
		maxAge : 10*1000,
		secure: false, // https와 http옵션 나누지 않음
		httpOnly: false 
		// sameSite: true :session삭제 안됨 ?
	}
}));


app.use( express.static(path.join(__dirname, 'public')));

app.use( express.json() ); // json
app.use( express.urlencoded({ extended : false }) ); 
app.use((req, res, next)=>{
    let message = `${req.method}, ${req.path}`
    logEvents( message ); // morgan, ...
    //console.log( req.method, req.path , new Date() );  
    next();
})
 
app.use((req, res, next)=>{
  console.log(req.session)
  next();
})

// route지정 
app.use('^/$|/index(.html)?', require('./router/root'));
app.use( '/register', register );
app.use('/login', require('./router/login')) 
app.use('/users', require('./router/users')) 

app.get('/*', (req, res)=>{
  res.status(404).sendFile( path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

const express = require('express');
// npm i mariadb
// control에서 import 
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 

const PORT = process.env.PORT || 3000;
const path = require('path');
const logEvents = require('./middleware/logEvent');
 
const register = require('./router/register');
const { getSearchid } = require('./control/login');
// const users = require('./model/users.json');
// 데이터를 조작해서 사용하기 불편

app.use( express.static(path.join(__dirname, 'public')));

app.use( express.json() ); // json
app.use( express.urlencoded({ extended : false }) ); 
app.use((req, res, next)=>{
    let message = `${req.method}, ${req.path}`
    logEvents( message ); // morgan, ...
    //console.log( req.method, req.path , new Date() );  
    next();
})
 
// route지정 
app.use('^/$|/index(.html)?', require('./router/root'));
app.use( '/register', register );
app.use('/login', require('./router/login')) 
app.use('/users', require('./router/users')) 
app.use('/employees', require('./router/employees')) 

app.get('/*', (req, res)=>{
  res.status(404).sendFile( path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

// MPA = HTML PAGE가 여러개 
// SPA = SINGLE PAGE APPLICATION
// REACT, VUE, ANGULER ... 
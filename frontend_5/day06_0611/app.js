const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path'); 
  
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
 
 
app.get('/*', (req, res)=>{
  res.status(404).sendFile( path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

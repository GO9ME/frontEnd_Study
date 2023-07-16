const express = require('express');
const app = express();
const path = require('path');
// const { logEvents } = require('./middleware/logEvents');
// 사용자가 만든 미들웨어
const fs = require('fs'); 
const cors = require('cors');
const session = require("express-session");

let users = [
    {
        id:1,
        userid:'test01',
        userpwd:'12345',
        username:'홍길동',
    },
    {
        id:2,
        userid:'test02',
        userpwd:'12345',
        username:'박길동',
    },
    {
        id:3,
        userid:'test03',
        userpwd:'12345',
        username:'은길동',
    },
]
// app.use(cors());
const whitelist = [
    'https://www.yoursite.com',
    'http://127.0.0.1:3000',
    'http://localhost:4000',
    'http://localhost:3000'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended :false}));

 
app.use((req, res, next)=>{
    console.log( req.url,  req.method );
    //logEvents(`${req.url}  ${req.method}`)
    next();
})

app.use((req, res, next)=>{
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
          name:'jemicom',
          expires: 60 * 60 * 24,
        },
      })
    next();
}
    
  );

app.get('/', (req, res)=>{
    res.send(users);
    // res.json(users);
})
 
app.post('/register', (req,res)=>{
    const {userid, userpwd}= req.body ;
    const user = {
        id : users.length ? users[users.length - 1].id + 1 : 1,
        userid,
        userpwd
    }
    users.push(user);

    res.send({success:true, userid });
})
app.post('/auth', (req,res)=>{
    const {userid, userpwd}= req.body ;
    const user =  users.find( user=>user.userid === userid && user.userpwd===userpwd)
    console.log( user )
    res.send({userid  });
})
app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
 

app.get('/*', (req, res)=>{
    res.send('file not found');
})

app.listen(4000, ()=>{
    console.log('app listening ', 4000);
})
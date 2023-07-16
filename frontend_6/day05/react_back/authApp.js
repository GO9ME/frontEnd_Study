/*
HTTP 요청은 기본적으로 Cross-Site HTTP Requests가 가능하다.

다시 말하면, <img> 태그로 다른 도메인의 이미지 파일을 가져오거나, <link> 태그로 다른 도메인의 CSS를 가져오거나, <script> 태그로 다른 도메인의 JavaScript 라이브러리를 가져오는 것이 모두 가능하다.

하지만 <script></script>로 둘러싸여 있는 스크립트에서 생성된 Cross-Site HTTP Requests는 Same Origin Policy를 적용 받기 때문에 Cross-Site HTTP Requests가 불가능하다.

AJAX가 널리 사용되면서 <script></script>로 둘러싸여 있는 스크립트에서 생성되는 XMLHttpRequest에 대해서도 Cross-Site HTTP Requests가 가능해야 한다는 요구가 늘어나자 W3C에서 CORS라는 이름의 권고안이 나오게 되었다.

cors
https://homoefficio.github.io/2015/07/21/Cross-Origin-Resource-Sharing/

cookies
https://basemenks.tistory.com/246
*/

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
//const corsOptions = require('./config/corsOptions');

const whitelist = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:3500',
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


let users = [
    {
        id:1,
        userid:"test01",
        userpwd:"test01"
    },
    {
        id:2,
        userid:"test02",
        userpwd:"test02"
    },   
]
// app.use(cors());


app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended :false}));

 
app.use((req, res, next)=>{
    console.log( req.url,  req.method ); 
    next();
})

 
app.get('/register', (req, res)=>{
    res.send(users);
    // res.json(todoList);
})
 
app.post('/register', (req,res)=>{
    const {userid, userpwd}= req.body;
    const user = {
        id : users.length ? users[users.length - 1].id + 1 : 1,
        userid,
        userpwd
    }
    users.push(user);
    console.log( )
    res.send(users);
})
app.post('/auth', (req,res)=>{
    const {userid, userpwd}= req.body;
    const find = users.find( user => user.userid === userid && user.userpwd === userpwd );

    if(find) { res.send(find); }
    else { res.send({success: "not found"})}
})

app.get('/*', (req, res)=>{
    res.send('file not found');
})

app.listen(4500, ()=>{
    console.log('app listening ', 4500);
})
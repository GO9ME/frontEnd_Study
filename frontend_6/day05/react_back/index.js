const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
 

// const pool = mariadb.createPool({
//     host : 'svc.gksl2.cloudtype.app',
//     user : 'root',
//     port:'32586',
//     database : 'test10',
//     password : '12345', 
//     connectionLimit : 30
// })

const pool = mariadb.createPool({ 
    host : '127.0.0.1',
    user : 'root', 
    port:'3306', 
    database : 'mystory',
    password : '12345', 
    connectionLimit : 30
})
app.use(
  session({
    key: "userid",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.post("/register", async (req, res)=>{
  const { userid, userpwd } = req.body;
  if (!userid || !userid) return res.status(400).json({ 'message': '아이디, 비밀번호를 입력하세요.' });

  let conn; 
  try{
       conn = await pool.getConnection();
       const sqlCheck = `select count(1) as cnt from users where userid = '${userid}';`;
       const rowsCheck = await conn.query( sqlCheck );

       if( parseInt(rowsCheck[0].cnt) === 1){
          const params = { "success" : false, "message" : `${userid}는 이미 존재하는 아이디입니다.`}
          return res.json(params);
          //return res.sendStatus(409).json(params);
       }
       console.log('정상처리 ',  rowsCheck );

       const hashedPwd = await bcrypt.hash(userpwd, 10); 
       const user = { "userid": userid, "userpwd": hashedPwd , "id":uuid()};
       console.log('createUser : ', user ); 

       const sql = `insert into users(userid, userpwd, id) values('${user.userid}', '${user.userpwd}', '${user.id}');`;
       const rows = await conn.query( sql );
       console.log(  rows  ); 
       // OkPacket { affectedRows: 1, insertId: 2n, warningStatus: 0 }
      
       const signUp = rows.affectedRows ? { "success" : true,  "message": `가입완료`} : { "success" : false,  "message":  '데이터 확인'}
       res.json( signUp );

  }catch( err){
       throw err; 
  }finally{
       if( conn ){  conn.end(); }
  }
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const userid = req.body.userid;
  const userpwd = req.body.userpwd;

  pool.query(
    "SELECT * FROM users WHERE userid = ?;",
    userid,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(userpwd, result[0].userpwd, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong userid/userpwd combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});

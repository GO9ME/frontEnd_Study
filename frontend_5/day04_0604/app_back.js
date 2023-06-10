const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');
// const users = require('./model/users.json');
// 데이터를 조작해서 사용하기 불편

app.use( express.static(path.join(__dirname, 'public')));

app.use( express.json() ); // json
app.use( express.urlencoded({ extended : false }) ); 
app.use((req, res, next)=>{
    console.log( req.method, req.path , new Date() );  
    next();
})
 
// localhost:3000/users
app.get('/users', async (req, res)=>{
    const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
    const users = JSON.parse(rawdata); // 배열로 변경 => 조작하기 위해서 
    //res.json(rawdata);
    res.send(users);
})

// 파라미터로 데이터 전달 
// app.get('/users/:userName', async (req, res)=>{
// app.get('/users/:userEmail', async (req, res)=>{
// app.get('/users/:userPhone', async (req, res)=>{
// localhost:3000/users/1
// localhost:3000/users/홍길동
app.get('/users/:id', async (req, res)=>{
    const id  = req.params.id;
    // const userEmail  = req.params.userEmail;
    // console.log('param id : ', id )
    const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
    const users = JSON.parse(rawdata); // 배열로 변경 => 조작하기 위해서 
    
    // form, body, param 요청된 정보는 모두 문자열이므로 데이터 타입을 맞추어야 검색 가능 
    const findUser = users.find( data=>data.id === Number(id) );

    let resData ;
    if( findUser ){
        resData = { success:true, message : findUser }
    }else{
        resData = { success:false, message : '존재하지 않습니다. 아이디 또는 전화번호를 확인하세요.' }
    }
    res.send(resData);
})

app.get('^/$|/index(.html)?', (req, res)=>{
    res.sendFile( path.join(__dirname, 'views', 'index.html'));
})

app.get('/register(.html)?', (req, res)=>{
    res.sendFile( path.join(__dirname, 'views', 'register.html'));
})

app.post('/register', async (req, res)=>{
    const user = req.body;
    // console.log( user ); 

    const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
    const users = JSON.parse(rawdata);

    const result = users.find(data=>
      data.userId === user.userId && data.userEmail === user.userEmail
    )

    let resdata = {}
    // result 가 undefined, null === false 
    if( !result ){
        //users.push( user );
        const id = users[users.length - 1].id + 1;
        // 마지막 인덱스 배열의 id + 1; 
        const newuser = { id, ...user } ; // user에 id 추가 
        users.push( newuser );

        fs.writeFile(path.join(__dirname, 'model', 'users.json'),
              JSON.stringify(users, null, ' '), 
              "utf-8",
              (err)=>{ console.log( err )}
        )

        resdata = { success : true, message : '정상 등록되었습니다.'}
    }else{
        resdata = { success : false, message : '이미 등록된 사용자 입니다.'}
    }

    res.send( resdata );
})

// post 방식처럼 처리해야 하나 params 처리로 함 
// 프론트에서 회원탈퇴 버튼을 클릭하면 호출되는 API
// localhost:3000/register/1
app.delete('/register/:id', async (req, res)=>{
    const id = req.params.id;
    console.log(id)

    const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
    const users = JSON.parse(rawdata);

    const find = users.find(data=> data.id !== Number(id) );
    let resdata = {}
    if( !find ){
       resdata = { success : false, message :'데이타를 찾을 수 없습니다.'}
    }else{
        // 있으면 삭제 하고 없으면 삭제하지 못함
        const result = users.filter(data=> data.id !== Number(id) );
        console.log( result )
        
        // result 가 undefined, null === false 
        if( result ){
            fs.writeFile(path.join(__dirname, 'model', 'users.json'),
                  JSON.stringify(result, null, ' '), 
                  "utf-8",
                  (err)=>{ console.log( err )}
            )

            resdata = { success : true, message : '정상 삭제 되었습니다.'}
        }else{
            resdata = { success : false, message : '사용자를 찾을 수 없습니다.'}
        }
    }
  
    res.send( resdata );
})

// 회원정보 수정 
app.put('/register', async (req, res)=>{
    const { userName , userId, userEmail, userPhone, userPwd } = req.body;
    // 수정할 데이타, 아이디, 이메일 아디로 사용된다면 수정 하지 못함
    // 수정하지 못하는 데이터로 데이터를 찾아서 수정한다.

    const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
    let users = JSON.parse(rawdata);

    const find = users.find(data=> data.userId === userId );
    // id  존재 : 데이터를 구분하는 유일한 키로 사용됨 
    const updatePhone = find.userPhone === userPhone ? find.userPhone : userPhone;
    const updatePwd = find.userPwd === userPwd ? find.userPwd : userPwd;
    console.log( updatePhone, updatePwd );

    // const updatedata = { userPwd : updatePwd, userPhone : updatePhone, ...find };
    const updatedata = {
      id : find.id, 
      userPwd : updatePwd, 
      userPhone : updatePhone, 
      userName : find.userName, 
      userEmail : find.userEmail, 
      userId : find.userId
    };
    // rest operator : 나머지 연산자, 맨뒤에 뒤에만 사용할 수 있음 
    const newUsers = users.filter( data => data.id !== find.id);
    // 검색한 아이디를 제외한 나머지 파일 백업 

    users = [ updatedata, ...newUsers ];
    console.log( users );

    fs.writeFile(path.join(__dirname, 'model', 'users.json'),
          JSON.stringify(users, null, ' '), 
          "utf-8",
          (err)=>{ console.log( err )}
    )

    let resdata = { success : true, message : '수정되었습니다.'}
    res.send( resdata );
})

app.get('/login', (req, res)=>{
  res.sendFile( path.join(__dirname, 'views', 'login.html'));
})

app.post('/login', async (req, res)=>{
    const { userId, userPwd } = req.body;
    
    const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
    const users = JSON.parse(rawdata);

    const result = users.find( data=>
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

// 프론트 입력 => fecth 요청
// 백엔드 => 받은 데이터 post  => 찾고 => 응답
// 프론트에서 => 데이터를 처리

app.post('/searchid', async (req, res)=>{
  // 이름, 전화번호 전화번호 get
  const { userName, userPhone  } = req.body; 

  const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
  const users = JSON.parse(rawdata);

  // userName, userPhone과 같은 같은 데이터가 있다면 아이디 리턴
  const findUser =  users.find(data=>data.userName === userName && data.userPhone === userPhone);

  let resData ;
  if( findUser ){
      resData = { success:true, message : findUser.userId }
  }else{
      resData = { success:false, message : '존재하지 않습니다. 아이디 또는 전화번호를 확인하세요.' }
  }
  res.send(resData);
})

app.post('/searchpwd', async (req, res)=>{
  // 이름, 아이디 
  const { userName, userId  } = req.body; 

  const rawdata = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
  const users = JSON.parse(rawdata);

  // userName, userPhone과 같은 같은 데이터가 있다면 아이디 리턴
  const findUser =  users.find(data=>data.userName === userName && data.userId === userId);

  let resData ;
  if( findUser ){
      resData = { success:true, message : findUser.userPwd }
  }else{
      resData = { success:false, message : '존재하지 않습니다. 아이디 또는 이름을 확인하세요.' }
  }
  res.send(resData);
})

app.get('/searchpwd', (req, res)=>{
  res.sendFile( path.join(__dirname, 'views', 'searchPwd.html'));
})
 
// 
app.get('/*', (req, res)=>{
  res.status(404).sendFile( path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, ()=>{
  console.log('listing' , PORT);
})

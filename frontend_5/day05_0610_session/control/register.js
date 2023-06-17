// control : 함수만 둔다.
const path = require('path');
const fs = require('fs');

const getRegister = (req, res)=>{
  res.sendFile( path.join(__dirname, '..', 'views', 'register.html'));
}

const postRegister = async (req, res)=>{
  const user = req.body;
  // console.log( user ); 

  const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
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

      fs.writeFile(path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(users, null, ' '), 
            "utf-8",
            (err)=>{ console.log( err )}
      )

      resdata = { success : true, message : '정상 등록되었습니다.'}
  }else{
      resdata = { success : false, message : '이미 등록된 사용자 입니다.'}
  }

  res.send( resdata );
}

const delRegister = async (req, res)=>{
  const id = req.params.id;
   
  const rawdata = await fs.readFileSync(path.join(__dirname,'..', 'model', 'users.json'));
  const users = JSON.parse(rawdata);

  const find = users.find(data=> data.id !== Number(id) );
  let resdata = {}
  if( !find ){
     resdata = { success : false, message :'데이타를 찾을 수 없습니다.'}
  }else{
      // 있으면 삭제 하고 없으면 삭제하지 못함
      const result = users.filter(data=> data.id !== Number(id) );
       
      // result 가 undefined, null === false 
      if( result ){
          fs.writeFile(path.join(__dirname,'..', 'model', 'users.json'),
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
}

const putRegister = async (req, res)=>{
  const { userName , userId, userEmail, userPhone, userPwd } = req.body;
  // 수정할 데이타, 아이디, 이메일 아디로 사용된다면 수정 하지 못함
  // 수정하지 못하는 데이터로 데이터를 찾아서 수정한다.

  const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
  let users = JSON.parse(rawdata);

  const find = users.find(data=> data.userId === userId );
  // id  존재 : 데이터를 구분하는 유일한 키로 사용됨 
  const updatePhone = find.userPhone === userPhone ? find.userPhone : userPhone;
  const updatePwd = find.userPwd === userPwd ? find.userPwd : userPwd;
  console.log( updatePhone, updatePwd );

  // const updatedata = { userPwd : updatePwd, userPhone : updatePhone, ...find };  // error
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

  fs.writeFile(path.join(__dirname,'..', 'model', 'users.json'),
        JSON.stringify(users, null, ' '), 
        "utf-8",
        (err)=>{ console.log( err )}
  )
  
  let resdata = { success : true, message : '수정되었습니다.'}
  res.send( resdata );
}

// patch 
const patchRegister = async (req, res)=>{
  const updateUser = req.body; 
  const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
  let users = JSON.parse(rawdata);

  let find = users.find(data=> data.userId === updateUser.userId );
  // id  존재 : 데이터를 구분하는 유일한 키로 사용됨 

  const index = users.indexOf( find );
  /*
  Object.keys() : 오브젝트에서 키값만 배열로 만듬
  Object.values() : 오브젝트에서 value값만 배열로 만듬
  Object.entries() : {키, value} 배열로 만듬
  Object.assign() : 객체를 복사   
   */
  Object.assign( users[index],  updateUser); // 속성이 달라진 것만 알아서 복사 
 
  fs.writeFile(path.join(__dirname,'..', 'model', 'users.json'),
        JSON.stringify(users, null, ' '), 
        "utf-8",
        (err)=>{ console.log( err )}
  )
  
  let resdata = { success : true, message : '수정되었습니다.'}
  res.send( resdata );
}

module.exports = { getRegister, postRegister, delRegister, putRegister, patchRegister }
// controls 
const path = require('path');
const fs = require('fs');

const getUsers = async (req, res)=>{
  const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
  const users = JSON.parse(rawdata); // 배열로 변경 => 조작하기 위해서 
  //res.json(rawdata);
  res.send(users);
}

const getUserId =  async (req, res)=>{
  const id  = req.params.id;
  // const userEmail  = req.params.userEmail;
  // console.log('param id : ', id )
  const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
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
}
module.exports = { getUsers, getUserId }
// login control

const path = require('path');
const fs = require('fs');

const getLogin =  (req, res)=>{
  res.sendFile( path.join(__dirname, '..', 'views', 'login.html'));
}

const postLogin = async (req, res)=>{
  const { userId, userPwd } = req.body;
  let resdata = {}
  
  if (req.session.user) {
		// 이미 로그인된 상태
		console.log('이미 로그인되어 상품 페이지로 이동합니다.');
		
		res.redirect('/product');
	} else {
		
    const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
    const users = JSON.parse(rawdata);

    const result = users.find( data=>
      data.userId === userId && data.userPwd === userPwd
    )
    
    // result 가 하나 반드시 존재 로그인
    if( result ){
        //res.cookie('user', result.userName);
         // 세션 저장
        req.session.user = {
          id: `${req.body.userId || req.query.userId}`,
          pwd: `${req.body.userPwd || req.query.userPwd}`,
          authorized: true
        };
        resdata = { success : true, message : result.userName , mysession : req.session }
    }else{
        resdata = { success : false, message : '아이디나 비밀번호를 확인하세요.', mysession : req.session }
    }
    console.log(req.session)
  }
  res.send( resdata );
}

const getSearchid = (req, res)=>{
  res.sendFile( path.join(__dirname,'..', 'views', 'searchId.html'));
}
const postSearchid = async (req, res)=>{
  // 이름, 전화번호 전화번호 get
  const { userName, userPhone  } = req.body; 

  const rawdata = await fs.readFileSync(path.join(__dirname,'..',  'model', 'users.json'));
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
}
const postSearchPwd = async (req, res)=>{
  // 이름, 아이디 
  const { userName, userId  } = req.body; 

  const rawdata = await fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
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
}
const getSearchPwd = (req, res)=>{
  res.sendFile( path.join(__dirname, '..', 'views', 'searchPwd.html'));
}

const delCookies =(req, res)=>{
    //res.clearCookie('user');

    console.log(req.session)
    if (req.session.user) {
      // 로그인된 상태
      console.log('로그아웃합니다.');
      
      req.session.destroy(function(err) {
        if (err) {throw err;}
        
        console.log('세션을 삭제하고 로그아웃되었습니다.');
        //res.redirect('/login');
        res.send({ success : true, message : '로그아웃'})
      });
    } else {
      // 로그인 안된 상태
      console.log('아직 로그인되어있지 않습니다.');
      
      //res.redirect('/login');
      res.send({ success : false, message : '로그인하세요'})
    }
   
}

module.exports = { 
  getLogin, 
  postLogin, 
  getSearchid, 
  postSearchid,  
  getSearchPwd,
  postSearchPwd,
  delCookies
}
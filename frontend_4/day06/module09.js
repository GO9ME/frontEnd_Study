// 모듈간 변수들이 겹침 현상이 발생했을때 범위 설정할 수 있음

const user = {
  name :'kim',
  addr : {
     zipcode : 59676,
     city:'seoul'
  }
}

const name = 'jemicom';

// module.exports = user;
module.exports = {user, name};
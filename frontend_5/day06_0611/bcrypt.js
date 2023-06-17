// npm i bcrypt 
const bcrypt = require('bcrypt');

const  data = 'testtest(0';

/*
bcrypt.hash( data, 13, (err, hash)=>{
  console.log('bcrypt : ', hash);

  bcrypt.compare(data, hash, (err, result)=>{
      console.log('result : ', result)
  })
})
*/
const pws = ['test12345', 'hello', 'hello', 'hello', '12345%'];

const reHashHandle = async (data, hash)=>{
  const result = await bcrypt.compare(data, hash); // 암호화 된 데이터가 같은 데이터인지 확인함 
  console.log('result : ', result, " hash ", hash );
} 

const hashHandle = async (data)=>{
  const hash = await bcrypt.hash( data, 10 ); 
  // console.log('bcrypt : ', hash); 
  reHashHandle( data, hash );
}

pws.forEach( data=> hashHandle( data )) 
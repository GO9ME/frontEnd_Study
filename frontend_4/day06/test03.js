// 비동기 처리 하기 위함(순차처리, 작업시작 후 작업완료를 확인하기위한 작업)
// 
const fs = require('fs');
const fsPromises = require('fs').promises;

// await, async => try{}catch{}finally{}

const fileOptions = async () =>{
   try{
      const data = await fsPromises.readFile('./datas/lorem.txt', 'utf-8');
      console.log( '1. ', data);

      await fsPromises.appendFile('./datas/lorem.txt', '\n add text');
      console.log('2. appendFile ');

      const appenDdata = await fsPromises.readFile('./datas/lorem.txt', 'utf-8');
      console.log( '3. ', appenDdata);

      // write, rename은 err 콜백 필요
      await fsPromises.writeFile('./datas/newLorem.txt', data, err=>{
            console.log('error write');
      });
      console.log( '4. writeFile');

      // oldname, newname
      await fsPromises.rename('./datas/newLorem.txt','./datas/renameLorem.txt', err=>{
        console.log('error rename');
      });
      console.log( '5. rename');
   }catch(err){
      if(err) throw err; 
   }finally{
    // err이든 정상처리되든 무조건 실행
    // open, close
    // file닫기
   }
}

fileOptions();

process.on('uncaughtException', err=>{
  console.log(err);
  process.exit();
})
const fs = require('fs');
const path = require('path');

// callback 무한 반복 상황 발생
// callback hel 순차처리 작업 중 발생하는 문제들
// jQuery의 animate()등 콜백처리에서도 같은 문제 발생할 수 있음
fs.readFile('./datas/lorem.txt', "utf-8", (error, data)=>{
    if (error) throw error;
    console.log("1. ", data);

    fs.writeFile('./datas/new1.txt', data, err=>{
      if (err) throw err;
      console.log( "2. ", );
      fs.appendFile('./datas/new1.txt', "add text", err=>{
          if(err) throw err; 
          console.log( "3. ", );
      })
    })
})

console.log( "4. ");
//console.log( "4. ", data);

fs.writeFile('./datas/new2.txt', "새로운 문서", err=>{
  if (err) throw err;
    console.log( "5. ", )
    fs.appendFile('./datas/new2.txt', "add text", err=>{
        if(err) throw err; 
        console.log( "6. ", )
    })
})

process.on('uncaughtException', err=>{
  console.log(err);
  process.exit();
})


// 순차처리작업 진행되지 않음 : 실행하면 끝날때까지 기다렸다가 다음을 처리하지 않음 
// 누가먼저 처리 될지 알수 없음 => 중간 삭제, 추가, 새로 실행 문제 발생할 수 있음 
// 순차처리할 수 있게 만들어주어야 함 : 비동기 처리 
// promises
// async : await
// 비동기 처리 하는 함수는 async 함수 붙여 사용함 
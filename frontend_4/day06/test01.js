const fs = require('fs');
const path = require('path');

// fs.readFile('./datas/lorem.txt', "utf-8", (error, data)=>{
//     //if (error) throw error;
//     console.log(data)
// })

//'./day06_0507/datas/lorem.txt'
// fs.readFile(path.join(__dirname, 'datas', 'lorem.txt'), "utf-8", (error, data)=>{
//       //if (error) throw error;
//       console.log(data)
// })

// openAPI : txt, xml, json
fs.readFile('./datas/coffee.json', (err, data)=>{
  if (err) throw err;
  console.log(data.toString()); //javascript가 사용할 수 있는 데이터 파일로 변경하기
  const parseData = JSON.parse(data);
  console.log( parseData.length, parseData[0]);
  console.log( typeof parseData );
  console.log( Array.isArray(parseData )); // 배열인지 확인
})


process.on('uncaughtException', err=>{
  console.log(err);
  process.exit();
})
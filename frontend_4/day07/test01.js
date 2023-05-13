// 데이터량 엄청 많은 경우 buffer를 이용해서 직접 데이터 파일로, 이동
const fs = require('fs')

const readStream = fs.createReadStream('./data/test.txt');
readStream.on('data',(chunk)=>{
    console.log('==== new chunk ====')  
    console.log(chunk);
})
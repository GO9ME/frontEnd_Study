// 데이터량 엄청 많은 경우 buffer를 이용해서 직접 데이터를 파일로, 이동
const fs = require('fs');

const readStream = fs.createReadStream('./data/test.txt', "utf-8");
const writeStream = fs.createWriteStream('./data/write.txt');

readStream.on('data', (chunk)=>{
  writeStream.write("\n ====== new chunk ===== \n");
  writeStream.write(chunk); 
})


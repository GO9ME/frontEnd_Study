// 파일 처리 확인 할것
const fs = require('fs');
// const fsPromises = fs.promises(); 

// fs.readFile('./datas/makeup.json', (error, data)=>{
//     console.log( data )
// }) 
fs.write('./datas/test.txt', 'mydata', (error )=>{
    console.error( data );
}) 

// const data = fsPromises.readFile('./datas/makeup.json');
// console.log( data );


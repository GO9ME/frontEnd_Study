const fs = require('fs');
// 폴더를 생성해서 그 안에 내용을 써야할 때 
// 삭제

fs.readdir('./datas', (err, filelist)=>{
    console.log(filelist);
})

fs.mkdir('./myData', err=>{
  console.log(err);
  console.log('폴더생성');

  setTimeout(()=>{
    fs.rmdir('./myData', err=>{
      console.log(err);
      console.log('폴더삭제');
    })
  }, 3000)
})



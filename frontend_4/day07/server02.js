const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;

const server = http.createServer(async (req, res)=>{
     try{
        const data = await fsPromises.readFile('./data/mydata.txt');
        res.end(data); // 데이터 전송하고 종료
     }catch(err){
        console.log(err)
     }
})

const PORT = 3000; 
server.listen( PORT , ()=>{
      console.log( "서버 시작", PORT );
})

// 코드 수정시마다 서버를 재시작 하기 귀찮음 
// nodemon : liver server 와 같이 server 갱신
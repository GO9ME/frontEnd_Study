const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;
const PORT = 3000; 

const server = http.createServer();

server.on('request', async (req, res)=>{
  try{
    // 1. 파일 읽어서 전송
    //  const data = await fsPromises.readFile('./data/mydata.txt');
    //  res.end(data); // 데이터 전송하고 종료

    // 2. 이미지 처리
    //const data = await fsPromises.readFile('./images/overlooking.jpg');

    // fs.readFile('./images/overlooking.jpg' , (err, data)=>{
    //   if( err ) console.log(err)
    //   res.writeHead(200, { 'Content-Type': 'image/jpg'});
    //   res.write(data);
    //   res.end();
    // });

    // 3. json 처리
    // const data = await fsPromises.readFile('./data/data.json');
    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // // node의 http의 서버는 'Content-Type' 지정되지 않으면 데이터를 전송하지 못함
    // res.write(data);
    // res.end();

    // 4. 분기처리 
    if( req.url === '/'){
      res.write('<h1>index.html root</h1>');
    }else if( req.url === '/test01'){
      const data = fs.readFileSync('./mini/ha_swap.html');
      // 서버 공간을 만들어 두고 읽어서 띄어 줌
      res.writeHead( 200, { 'Content-Type' : 'text/html'})
      res.write( data );
    }else if( req.url === '/json'){
      const data = await fsPromises.readFile('./data/data.json');
      res.writeHead(200, { 'Content-Type': 'application/json'}); 
      res.write(data);
    }
    res.end();

  }catch(err){
     console.log(err)
  }
})

server.listen( PORT , ()=>{
      console.log( "서버 시작", PORT );
})

// 코드 수정시마다 서버를 재시작 하기 귀찮음 
// nodemon : liver server 와 같이 server 갱신
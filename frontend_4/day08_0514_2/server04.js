const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;
const PORT = 3000; 
// content-type 처리 
const path = require('path');

const server = http.createServer();

server.on('request', async (req, res)=>{
  let filePath = path.join(__dirname, 'mini', req.url === '/' ? 'ha_swap.html' : req.url);
  // localhost:3000
  // /d/frontend_4/day07_0513/mini/ha_swap.html
  let extname = path.extname( filePath );
  let contentType = 'text/html; charset=utf-8';//  한글깨짐

  switch( extname ){
    case '.js' : contentType = "text/javascript" ; break; 
    case '.css' : contentType = "text/css" ; break; 
    case '.json' : contentType = "application/json" ; break; 
    case '.png' : contentType = "image/png" ; break; 
    case '.jpeg' : contentType = "image/jpg" ; break; 
    case '.jpg' : contentType = "image/jpg" ; break; 
  }
  // node 단만 가지고 restfull Api 작업
  // express 를 처리하면 복잡한 작업 필요 없음 
   
  try{
      res.writeHead( 200, {'Content-Type' : contentType});
      let content ; 

      // localhost:3000
      if( req.url === '/' &&  req.method === 'GET'){
         content = await fsPromises.readFile(path.join(__dirname, 'mini', 'ha_swap04.html') ); 
         //content = await fs.readFileSync(path.join(__dirname, 'mini', 'ha_swap.html') ); 

      }else if( req.url.includes('css') &&  req.method === 'GET'){
         content = await fsPromises.readFile(path.join(__dirname, 'mini', 'ha_swap.css') ); 

      }else if( req.url.includes('js') &&  req.method === 'GET'){
         content = await fsPromises.readFile(path.join(__dirname, "../script/jquery-3.6.4.min.js") ); 

      }else if( extname.includes('jpg') || extname.includes('png') || extname.includes('gif')){
        // 이미지 다양하게 처리하기
         content = fs.readFileSync(filePath); 

      // localhost:3000/subdir   
      }else if( req.url==='/subdir' && req.method === 'GET' ){
         content = fs.readFileSync(path.join(__dirname, 'subdir', 'index.html'))

       // localhost:3000/user
      }else if( req.url === '/user' &&  req.method === 'GET'){
         const user = [{
              name:'kim',
              phone : '010'
         }]
         content = JSON.stringify(user);

      // loaclhost:3000/users   
      }else if( req.url === '/users' &&  req.method === 'GET' ){
         const response = fs.readFileSync(path.join(__dirname, 'data', 'data.json' ), "utf-8");
         content = response;
        // 
        // localhost:3000/users/name='kim'  
        // 파라미터 값 찾기
     }else if( req.url.includes('name') &&  req.method === 'GET' ){
        content = fs.readFileSync(path.join(__dirname, 'data', 'data.json' ), "utf-8"); 
        const rawData = JSON.parse(content);

        const nameary = req.url.split('/');
        const name = nameary[ nameary.length - 1].split("=")[1];
        // js를 이용해서 검색어를 찾음 

        const find = rawData.find( user=> user.name === name)

        content =  JSON.stringify(find) ; 

    // post, delete, put, petch
    // localhost:3000/users/name
    /*
          {
              "name":"html",
              "addr":"합정"
          }
    */
     // create : 중복된 데이터가 있는지 확인 
     }else if( req.url.includes('name') &&  req.method === 'POST' ){
          let body = ''; // req.body

          req.on('data', (chunk)=>{
              body += chunk.toString();

              const { name, addr } = JSON.parse(body);
              // js 디스트럭터
              console.log( name, addr ); // 데이터 확인

              //const newUser = { name : name , addr : addr };
              const newUser = { name , addr };

              const response = fs.readFileSync( path.join(__dirname, 'data', 'data.json'));
              const users = JSON.parse( response ); // json => 배열
              console.log("before", users.length )
              
              users.push(newUser);

              console.log("after", users.length )

              fs.writeFileSync( path.join(__dirname, 'data' , 'data.json'), 
                  JSON.stringify(users, null, "   "), "utf-8", 
                  (err)=>{
                    console.log(err)
                  }
              )

              content = { 
                success : 'ok', 
                message : '정상 등록 되었습니다.', 
                data : newUser
              }
          })

     // 입력된 이름 지우기 
     // http://localhost:3000/users/name=html
     // post 방식처럼 처리해야 함  : 눈에 안보이니 get방식처럼 처리 
     }else if( req.url.includes('name') &&  req.method === 'DELETE' ){
          content = fs.readFileSync(path.join(__dirname, 'data', 'data.json' ), "utf-8"); 
          const rawData = JSON.parse(content);

          const nameary = req.url.split('/');
          const name = nameary[ nameary.length - 1].split("=")[1];
          // js를 이용해서 검색어를 찾음 

          const filtered = rawData.filter( user=> user.name !== name);
          // 검색한 이름을 제외한 모든 데이타 백업

          fs.writeFileSync( path.join(__dirname, 'data' , 'data.json'), 
                  JSON.stringify(filtered, null, "   "), "utf-8", 
                  (err)=>{
                    console.log(err)
                  }
          )

          content = JSON.stringify({ 
            success : 'ok', 
            message : '삭제되었습니다.', 
            data : name
          })


     //  http://localhost:3000/name    
     /*
          {
            "name":"html",
            "addr":"합정"
          }

          name : 사용자 이름, 상품 이름, 
          http://localhost:3000/product/name
          }else if( req.url.includes('/product/name') &&  req.method === 'PUT'){

         http://localhost:3000/user/name   
     */
     }else if( req.url.includes('/user/name') &&  req.method === 'PUT'){
          let body = '';

          req.on('data', chunk=>{
               body += chunk.toString();
               const { name, addr }  =  JSON.parse(body);

               const response = fs.readFileSync(path.join(__dirname, 'data', 'data.json'));
               const users = JSON.parse(response);

               const find = users.find( user=> user.name === name ); // 수정할 데이터
               find.addr = addr ? addr : find.addr;
                // addr : null, undefined == false, string = true

              const filtered = users.filter( user=> user.name !== name ); // 삭제한 데이터
              filtered.push( find );

              fs.writeFileSync( path.join( __dirname, 'data', 'data.json'),
                      JSON.stringify( filtered, null, "  "), "utf-8",
                      err=>{
                        console.log(err)
                      }
              )

              content = JSON.stringify({
                    success : 'ok',
                    message : '수정되었습니다.',
                    data : find
              })

              res.end( content );
          })

     }

      res.end( content ); ///
  }catch(err){
     console.log(err)
  }
})

server.listen( PORT , ()=>{
      console.log( "서버 시작", PORT );
})

// pagenation
// fullpage
// node 끝나면  express
// front  content 를 받아야 함 
// fetch(url).then().then()
// fetch(url, { method, body, heades }).then().then()
// 수정 : PUT, PECTH
// 수정할 데이터 찾기 : name
// 다른 데이터 수정
// 덮어쓰기 
 
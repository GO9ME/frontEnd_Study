// express : js로 만들어진 서버 만드는 도구 
const express = require('express')
const app = express();
//const fs = require('fs');
const path = require('path');// 

app.set('PORT',3000);
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(__dirname + '//public'));
//public 안에 있는 모든 코드를 자동으로 인식

const ary3 = ['바나나','포도','사과','오렌지'];
const animal = [{id: 50, name:'곰'},{id: 1, name:'호랑이'},{id: 34, name:'사자'},{id: 23, name:'여우'},{id: 101, name:'기린'}]
const footer = `
<footer>
  <div class="footerbg">
    <div class="footermenu">회사소개 | 이용약관 | 개인정보취급방침 | 이용안내 | FAQ</div>
  </div>
  <div class="address"><img src="images/ha_address.jpg" width="527" height="78" alt=""/></div>
</footer>`

//localhost:3000
app.get('/', function (req, res) {
  res.send(footer);
})

//localhost:3000/object
app.get('/object', function (req, res) {
/res.send({id:1, name:'사자'}); //object, json으로응답
  
})

app.get('/array', function (req, res) {
   res.send(ary3)// 배열
   
  })

  app.get('/animal', function (req, res) {
    
    res.send(animal); // 객체배열
  })


app.listen(app.get('PORT'), ()=>{
    console.log("server start", app.get('PORT'))
});


// 다양한 요청(request)에 대한 응답 (response) - 라우팅 작업

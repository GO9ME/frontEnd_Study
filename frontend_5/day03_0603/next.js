// next() 미들웨어 
const one = (req, res, next)=>{
  console.log( 'one'); // 전처리 
  next();
}
const two = (req, res, next)=>{
  console.log( 'two'); // 전처리 
  next();
}
const three = (req, res, next)=>{
  console.log( 'three'); // 전처리 
  //next();
  res.send('three end');
}

app.get('/test', [one, two, three]);
// console.log
// one
// two
// three


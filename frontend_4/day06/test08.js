const { x, ...myData } = { x:1, y:2, z:3}
console.log( x, myData.y, myData.z);
console.log( x, typeof myData); // 1, object 

const todos = [
  {
    id:1,
    subject:'HTML',
    checked : true
  },
  {
    id:2,
    subject:'css',
    checked : true
  },
  {
    id:3,
    subject:'javascript',
    checked : false
  },
]

const [, {id}]= todos; 
// todos 배열의 2번째 데이터 중 id를 꺼내옴
console.log(id);

const user = {
   name :'kim',
   addr : {
      zipcode : 59676,
      city:'seoul'
   }
}

const {addr : { zipcode }} = user;
console.log(zipcode);
const [a, b, c] = [1, 2];
console.log( a, b, c);

const [x, y, z = 3] = [1, 2]; // 값이 없으면 기본값으로 초기화
console.log( x, y, z );

const [n, m, l = 3] = [1, 2, 10]; // 할당된 값이 우선
console.log( n, m, l );

const myFunction = (a=1, b=2)=>{
    console.log( a, b)
}

myFunction();
myFunction(99, 98);

const user = {
    firstName:'jemicom',
    lastName:'kim'
}

// let firstName = user.firstName;
// let lastName = user.lastName;
// console.log( firstName, lastName );

// let {firstName, lastName} = user; 
// user의 속성명이 같은 속성을 꺼내온다. // 순차처리 개념이 아님 
// console.log( firstName, lastName );

console.log( typeof null); // object
// let { fn, ln} = null; // 불가능

const { firstName } = user; // 순차처리 개념이 아님 
const { lastName } = user;  // 순차처리 개념이 아님 
console.log( firstName, lastName ); // jemicom kim

// 모듈 사용시 이름 겹침 현상을 해결하기 위함
// 스코프 설정
const { firstName : fn} = user; // 순차처리 개념이 아님 
const { lastName : ln} = user;  // 순차처리 개념이 아님 
console.log( fn, ln ); // jemicom kim

const todo = {
  id:1,
  subject:'HTML',
  checked : true
}

const { checked } = todo;
console.log( checked );

const str = 'hello';
const { length } = str; // 문자열 오브젝트의 속성  length 를 꺼내옴
console.log( length );

// const printTodo = (todo)=>{
//   console.log( todo.id , todo.subject, todo.checked );
// }
const printTodo = ({ subject })=>{
  console.log(  subject  );  // HTML
}

// printTodo({
//   id:1,
//   subject:'HTML',
//   checked : true
// });

printTodo({...todo});


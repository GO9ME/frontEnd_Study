// 디스트럭쳐링(구조분해할당) : 문법 => 리엑트(클래스컴포넌트 => 함수컴포넌트)
// 모듈 사용하기만 했음

const arys = [1,2,3];
let a = arys[0];
let b = arys[1];
let c = arys[2];

// let [ x, y, z] = arys; // 순차적으로 나열되어 있는 데이터를 순차적으로 배치
// console.log( a, b, c);
// console.log( x, y, z);

let [ x, y ] = arys; // 개수는 상관 없고
let [ e, , g , u ] = arys; // 생략할 수도 있고 , 값이 부족할 수도 있고
console.log( a, b, c);
console.log( x, y);
console.log( e, g, u); // 1 3 undefined // u는 개수가 모자라 undefined

// ... spread operator : Rest Operator(나머지 연산자)
let [ n, ...newary ] = arys; // 나머지 연산자는 맨끝에만 사용할 수 있음
console.log( a, b, c);
console.log( n, newary.length, Array.isArray(newary));

let [ m, q] = ['a', 'b'];
console.log('tt : ',  m, q );

// object 에서도 실행 확인할 것임

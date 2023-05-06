const { format } = require('date-fns');
// npm으로 설치한 모듈 사용하기 : 외부 모듈
// javascript : destructer 

// 날짜를 조작해주는 모듈
const today = new Date();
console.log( today );
console.log( today.getFullYear(), "-", today.getMonth());

console.log( format(today, 'yy-MM-dd'));  
console.log( format(today, 'yyyy/MM/dd'));  
console.log( format(today, 'hh:mm:ss'));  
console.log( format(today, 'hh:mm'));  
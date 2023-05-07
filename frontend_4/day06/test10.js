const math = require('./module10');
// math = { add, sub, mul, div }

console.log( math.add( 10, 50));
console.log( math.mul( 10, 50));

const { sub, div } = require('./module10');
// 필요한 것만 꺼내올 수 있음 
console.log( sub(50, 30));
console.log( div(50, 30));
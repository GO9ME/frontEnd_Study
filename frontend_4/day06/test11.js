const { User } = require('./module11');
const { printName : writeName } = require('./module11');
const user = new User('kim', 30);
//const today = new Date();

writeName( user );

// module09 ~ 11 : commonjs 방식의 모듈  
// ES6 타입의 모듈 : .mjs 사용하고 import 방식 : react 
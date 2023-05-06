// node js 기본 변수
console.log(__dirname);
console.log(__filename);
console.dir(__dirname);
console.dir(__filename);

// os 내장모듈 : 내컴퓨터의 운영체제에 대한 정보
const os = require('os');
console.log( "os.homedir()" , os.homedir() );
console.log( "os.freemem()" , os.freemem() );
console.log( "os.totalmem()" , os.totalmem() );
console.log( "os.type()" , os.type() );
console.log( "os.version()" , os.version() );

// path : 파일경로 관리하는 모듈
const path = require('path');
console.log( path.dirname(__filename)); // 경로명
console.log( path.basename(__filename)); // 파일명
console.log( path.extname(__filename)); // 확인자
console.log( path.parse(__filename)); // 패스 수정

console.log( path.dirname('../../frontend_4/datas/makeup.json')); // 경로명
console.log( path.basename('../../frontend_4/datas/makeup.json')); // 파일명
console.log( path.extname('../../frontend_4/datas/makeup.json')); // 확인자
console.log( path.parse('../../frontend_4/datas/makeup.json')); // 패스 수정


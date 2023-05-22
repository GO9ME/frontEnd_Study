const ary1 = [ 11, 22, 1, 35, 40];
const ary2 = ['orange', 'grape', 'apple', 'banana'];
const ary3 = ['바나나', '포도', '사과' , '오렌지'];

ary1.reverse();
console.log(ary1);

// ary1.sort(); // 정렬, 오름차순 정렬 // 내림차순 정렬
console.log(ary1);

//ary2.sort();  // 영어는 정상 오름차순 정렬 
console.log(ary2);

//ary3.sort();  // 한글도 오름차순 정렬 
console.log(ary3);

/// 오름차순 
ary1.sort((prev, next)=> prev - next); // 1, -1, 0
console.log(ary1)

// 내림차순
ary1.sort((prev, next)=> next - prev); // 1, -1, 0
console.log(ary1)

/// 오름차순 : node단에서 검사해서 원본이 바뀌는 내용파악할 수 없음 
ary2.sort((prev, next)=> prev.localeCompare(next)); // 1, -1, 0
console.log(ary2)
// 내림차순
ary2.sort((prev, next)=> next.localeCompare(prev)); // 1, -1, 0
console.log(ary2)

// 오름차순
ary3.sort((prev, next)=> prev.localeCompare(next)); // 1, -1, 0
console.log(ary3) 

// 내림차순
ary3.sort((prev, next)=> next.localeCompare(prev)); // 1, -1, 0
console.log(ary3) 

const animal = [
  { id: 50, name: '곰'},
  { id: 1, name: '호랑이'},
  { id: 34, name: '사자'},
  { id: 23, name: '여우'},
  { id: 101, name: '기린'}
]

console.log( animal )
animal.sort((prev, next)=>prev.id - next.id);
console.log( animal )

//오름차순
animal.sort((prev, next)=>prev.name.localeCompare(next.name));
console.log( animal )
animal.sort((prev, next)=>prev['name'].localeCompare(next['name'])); // 유사배열처리방식
console.log( animal )
// 내림차순
animal.sort((prev, next)=>next['name'].localeCompare(prev['name']));
console.log( animal )
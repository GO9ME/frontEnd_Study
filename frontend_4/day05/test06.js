// dom 이 없으므로 마우스 이벤트 핸들러는 사용할 수 없음 
// 파일시스템 단위로 동작하므로 파일간 데이터 주고 받고 처리 

// __dirname
// 내장객체

process.on('exit', ()=>{
  console.log('exit 이벤트 발생')
})

// 사용자가 필요에 의해 만든 이벤트
process.on('hello', ()=>{
  console.log('hello 이벤트 발생')
})
process.on('bye', ()=>{
  console.log('bye 이벤트 발생')
})

setTimeout(()=>{
    console.log('프로그램실행 중');
}, 5000 )

setTimeout(()=>{
    process.emit('hello');
    // 사용자가 만든 이벤트
}, 1000 )

setTimeout(()=>{
    process.emit('bye');
    // 사용자가 만든 이벤트
}, 6000 )


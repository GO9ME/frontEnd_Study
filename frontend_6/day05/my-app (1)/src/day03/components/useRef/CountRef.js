import React, {useState, useRef} from 'react'
// 값을 유지하는 용도의 ref

const CountRef = () => {
    const [count, setCount] = useState(0); // count=0
    let letCount = 0; 
    const refCount = useRef(0); 
    // refCount = { current : 0 }  // refCount=0

    const stateCount = ()=>{
        setCount( count+1 );
    }

    const letCountHandle = ()=>{
        letCount++;
        console.log('let 변수 ', letCount);
        // document.querySelector('.letCount').innerHTML = `변수 ${ letCount }`
    }

    const refCountHandle = ()=>{
        refCount.current = refCount.current + 1;
        console.log('ref ', refCount.current ) 
    }
  return (
    <div>
        <button onClick={ stateCount }>     state { count } </button>
        <button onClick={ letCountHandle } className='letCount'> 변수 { letCount } </button>
        <button onClick={ refCountHandle }> RefCount { refCount.current } </button>
        {/* 
            데이타 엄청 자주 바뀌값 => 랜더링에 과부하
            state대신 ref
        */}
    </div>
  )
}

export default CountRef
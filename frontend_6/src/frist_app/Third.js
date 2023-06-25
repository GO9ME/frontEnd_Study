import React, {useState} from 'react'
// 랜덤한 번호
// 배열에 이름을 출력 

const Third = () => {
  const names = ['kim', 'park', 'hong']; // 0, 1, 2

  const [num, setNum]=useState(0);
  const [name, setName] = useState(names[num]);
  
  const numHandle = ()=>{
    const redomNum = Math.floor(Math.random() * 3);
    setNum( redomNum );
    setName(names[redomNum]);
  }
  return (
    <div>
        <div className="box">{ num } { name }</div>
        <button onClick={ numHandle }>click</button>
    </div>
  )
}

export default Third
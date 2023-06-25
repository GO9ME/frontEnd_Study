
function First(){
  const name = "React";

  const ulStyle = {
    color:"orange",
    border : "1px solid blue"
  }
  
  return (
    <div className="container"
         style={{ color: "red", background :'skyblue' }}
    >
       <div>First {name}</div>
       <ul  style={ulStyle}>
        <li>apple</li>
        <li>fineApple</li>
        <li>banana</li>
       </ul>
    </div>
  )
}

export default First;

/* 
  React 
  html ()
  js {}
  class => className
  LABEL for   => forHTML
  함수 : 함수, 첫글자 대문자인 함수 (컴포넌트 : 새로만든 태그, container)

  [데이터 사용법]
  변수 사용법 
  state : js 변수는 UI 갱신하지 못함, 값이 바뀌면  UI갱신
  props : 부모 컴포넌트 => 자식 컴포넌트 넘겨지는 데이터, js destructur
  context : 최상위 컴포넌트 지정한 값 => 어느 하위 컴포넌트에서 사용

  [UI 처리]
  hook : 함수(method), 특정용도를 만들어둔 함수
        useState 
*/
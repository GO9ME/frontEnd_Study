import React, {useRef, useEffect , useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const useridRef = useRef();
    const userpwRef = useRef();

    useEffect(()=>{
        useridRef.current.focus();
    }, [])

    const registerHandle = ()=>{
        if( useridRef.current.value === '' || userpwRef.current.value === ''){
            alert('아이디 또는 비밀번호를 입력하세요.');
            useridRef.current.focus();
            return false; 
        }
        alert(`${useridRef.current.value}님 등록되었습니다.`);
        setUserid( useridRef.current.value);
        setUserpw( userpwRef.current.value);
        
        useridRef.current.value = '';
        userpwRef.current.value = '';
        //다른 url로 넘어가기
    }

     
  return (
    <div>
        <h1>회원가입</h1>
        <div>
             <input type="text"  ref={useridRef} placeholder='아이디'/>
        </div>
        <div>
            <input type="password"  ref={userpwRef} placeholder='비밀번호'/> 
        </div>
        <button onClick={registerHandle}> 회원가입 </button>
    </div>
  )
}

export default Register
import React, {useRef, useEffect} from 'react'
// 사용자 정의 훅 
const useFadeIn = (duration=0.4, delay=0) => {
    const element  = useRef(); 

    useEffect(()=>{
        if(element.current){
            const { current } = element; 
            current.style.transition =`opacity ${duration}s  ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [])

    if( typeof duration !== "number" || typeof delay !== "number"){
        return; 
    }

    return { ref : element, style : { opacity : 0 }}
}

export default useFadeIn
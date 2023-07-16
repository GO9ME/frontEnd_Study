// js  : document.querySelector(), 선택자 지정
import React, { useRef, useState } from 'react'
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
/*
const Vedio = () => {
    const videoRef = useRef();
    console.log(videoRef) // videoRef = { current : video}

    return (
        <div>
            <video  ref={videoRef}  width="400">
                <source src="./movies/168572 (360p).mp4" type="video/mp4" />
            </video>

            <button onClick={()=>{ videoRef.current.play() }} >재생</button>
            <button onClick={()=>{ videoRef.current.pause() }} >멈춤</button>
        </div>
    )
}
*/

import useFadeIn from '../customhook/useFadeIn';
const Vedio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();
    console.log(videoRef) // videoRef = { current : video}
    const fadeVedio = useFadeIn(5,2);

    const playHandle = ()=>{
        const video = videoRef.current;

        setIsPlaying(!isPlaying);
        isPlaying ? video.play():  video.pause();
    }

    return (
        <div {...fadeVedio}>
            <video  ref={videoRef}  width="400"  
                    onClick={playHandle}  
            >
                <source src="./movies/168572 (360p).mp4" type="video/mp4" />
            </video>

            <button onClick={playHandle} >
                {
                    isPlaying ? <FaPlayCircle /> : <FaStopCircle />
                }
            </button>
        </div>
    )
}

export default Vedio
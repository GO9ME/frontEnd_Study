import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import FadeSlider from "./components/fadeSlider/FadeSlider";
import HoriSlider from "./components/horiSlider/HoriSlider";
import MySwiper from './components/swiper/MySwiper'
import './App.css'

const App = ()=>{
    return (
        <>
        <Sidebar />
        <div className="slider">
            <FadeSlider />
        </div>
        <div className="slider">
            <HoriSlider />
        </div>
        <div className="slider"> 
            <MySwiper />
        </div>
    
        </>
    )
}

export default App;
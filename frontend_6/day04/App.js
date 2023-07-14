import React, { useState, useEffect } from "react";
import './App.css'
import Modal, { useModal } from "./components/modal/Modal";

const App = ()=>{
     const [isOpen, setIsOpen , openModal , closeModal] = useModal();
  
    return (
         <div>
           <button onClick={openModal}> 팝업 띄우기 </button>
           <Modal isOpen={isOpen} closeModal={closeModal }/>
         </div>
    )
}

export default App;
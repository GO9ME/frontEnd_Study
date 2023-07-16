import React, { useState, useEffect } from "react";
import './App.css'
import Modal, { useModal } from "./components/modal/Modal";
import { ModalContext } from "./contexts/ModalContext";

const App = ()=>{
     const [isOpen, setIsOpen , openModal , closeModal] = useModal();
  
    return (
         <div>
          <ModalContext.Provider value={{isOpen, setIsOpen , openModal , closeModal}} >
               <button onClick={openModal}> 팝업 띄우기 </button>
               {/* <Modal isOpen={isOpen} closeModal={closeModal }/> */}
               <Modal />
          </ModalContext.Provider>
         </div>
    )
}

export default App;
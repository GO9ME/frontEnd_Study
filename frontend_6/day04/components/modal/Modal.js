import React, { useState } from 'react'
import './Modal.css'

// popup : 열기, 닫기, state
export const useModal = (inintialValue = false)=>{
    const [isOpen, setIsOpen] = useState(inintialValue);

    const openModal = ()=>{
        setIsOpen( true );
    }
    const closeModal = ()=>{
        setIsOpen( false );
    }

    return [isOpen, setIsOpen , openModal , closeModal];
}

const Modal = ({isOpen, closeModal}) => {
    const handleStopBubble = (event)=>{
            event.preventDefault();
    }

  return (
    <div className={isOpen? 'modal openModal' : 'modal'}>
        {
            isOpen ? (
                <section>
                    <div className='content'  onClick={ handleStopBubble }>
                        팝업 내용......
                    </div>
                    <button className='close' onClick={ closeModal }>닫기</button>
                </section>
            ) : null
        }
    </div>
  )
}

export default Modal
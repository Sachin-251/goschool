import React from 'react'
import styles from './modals.module.css';

const Modal = ({content,closeModal}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center'>
        <div className='absolute top-0 left-0 w-full h-screen bg-[#00000073] blur-lg' onClick={closeModal}></div>
        <div className={`${styles.modal} my-0 mx-4 p-8 relative max-w-[630px] w-full z-50 border-4 border-green-500 shadow-xl rounded-xl`}>{content}</div>
    </div>
  )
}

export default Modal
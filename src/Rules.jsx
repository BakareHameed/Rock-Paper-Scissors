import React from 'react'
import close from './images/icon-close.svg'
import rules from './images/image-rules.svg'
import './App.css'

const Rules = () => {
  return (
    // implemented the rules page
    <div className='flex bg-white h-[350px] w-[350px] mx-auto rounded-md p-5'>
      <div className='flex flex-col justify-center gap-5'>
        <div className='flex justify-between'>
          <h1 className='dark-text'>RULES</h1>
          <img src={close} alt="close"/>
        </div>
        <img src={rules} alt="rules"/>
      </div>
    </div>
  )
}

export default Rules
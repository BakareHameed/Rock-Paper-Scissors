import React from 'react'
import './App.css'
import triangle from './images/bg-triangle.svg'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='h-[120px] w-[500px] bdr flex justify-between p-3 items-center mt-5 rounded-xl '>
            <div>
                <h2 className='text-white flex flex-col text-2xl'>
                    ROCK
                </h2>
                <h2 className='text-white flex flex-col text-2xl'>
                    PAPER
                </h2>
                <h2 className='text-white flex flex-col text-2xl'>
                    SCISSORS
                </h2>
            </div>
            <div className='bg-white h-[70px] w-[100px] flex flex-col items-center justify-center rounded-xl'>
                <p className='score-text'>SCORE</p>
                <h1 className='outline text-2xl'>12</h1>
            </div>
        </div>

        <div className='mt-8'> 
            <img src={triangle} alt="" />
        </div>
    </div>
  )
}

export default Home
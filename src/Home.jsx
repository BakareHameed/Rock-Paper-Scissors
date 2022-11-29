import React from 'react'
import './App.css'
import triangle from './images/bg-triangle.svg'
import paper from './images/icon-paper.svg'
import rock from './images/icon-rock.svg'
import scissors from './images/icon-scissors.svg'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center home'>
        <div className='h-[120px] w-[300px] md:w-[500px] bdr flex justify-between p-3 items-center mt-5 rounded-xl '>
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

        <div className='mt-8 flex justify-center items-center'> 
            <img src={triangle} alt="traingle" className='absolute'/>
            <div className='hands rounded-full border-blue-500 paper'>
                <img src={paper} alt="paper" />
            </div>
            <div className='hands rounded-full border-yellow-500 scissors'>
                <img src={scissors} alt="scissors" />
            </div>
            <div className='hands rounded-full border-red-500 rock'>
                <img src={rock} alt="rock" />
            </div>
        </div>
        
        <div className='flex w-screen md:justify-end md:mr-9 justify-center mt-9'>
            <button className='text-white py-2 px-7 rounded-xl'>RULES</button>
        </div>
    </div>
  )
}

export default Home
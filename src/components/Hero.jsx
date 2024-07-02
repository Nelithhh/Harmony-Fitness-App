import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>IT'S TIME TO GET</p>
            <h1 className='text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl'>SWOLE<span className='text-blue-400'>NORMOUS</span></h1>   
        </div>
      
        <p className='text-sm font-light md:text-base'>I hereby acknowledgment that I may become <span className='font-medium text-blue-400'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='font-medium text-blue-400'>mass montrosity</span>, affiliated with severe body dismorphia, unable to fit through doors.</p>

        <Button text={"Accept & Begin"} />
    </div>
  )
}

export default Hero

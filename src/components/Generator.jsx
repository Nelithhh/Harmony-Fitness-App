import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'

function Header(props) {
  const {index, title, description} = props

  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='font-semibold tex-3xl sm:text-4xl md:text-5xl text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='mx-auto text-sm sm:text-base'>{description}</p>
    </div>
  )
}

function Generator() {
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s','Huge','o\'clock']}>
      <Header index={'01'} title={'Pick you poison'} description={"Select the workout you wish to endure."} />
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return(
            <button className='py-3 duration-200 border border-blue-400 rounded-lg bg-slate-950 hover:border-blue-600' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Locked on targets'} description={"Select the muscles judged for annihlation."} />
      <div className='p-3 border border-blue-400 border-solid rounded-lg bg-slate-950'>
        <div className='relative flex items-center justify-center'>
          <p>Select muscle group</p>
          <i className="absolute -translate-y-1/2 fa-solid right-3 top-1/2 fa-caret-down"></i>
        </div>
        {}
      </div>
    </SectionWrapper>
  )
}

export default Generator

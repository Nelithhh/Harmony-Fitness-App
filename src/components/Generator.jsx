import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'

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

  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] =useState('individual');
  const [muscles, setMuscles] =useState([]);
  const [goal, setGoal] =useState('strength_power');

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter( val => val !== muscleGroup))
      return
    }

    if (muscles.length > 2) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if(muscles.length === 3) {
      setShowModal(false)
    }

  }

  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s','Huge','o\'clock']}>
      <Header index={'01'} title={'Pick you poison'} description={"Select the workout you wish to endure."} />
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return(
            <button onClick={() => {
              setPoison(type)
            }} className={'py-3 duration-200 border rounded-lg bg-slate-950 ' + (type === poison ? 'border-blue-600' : 'border-blue-400')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Locked on targets'} description={"Select the muscles judged for annihlation."} />
      <div className='flex flex-col border border-blue-400 border-solid rounded-lg bg-slate-950'>
        <button onClick={toggleModal} className='relative flex items-center justify-center p-3'>
          <p>Select muscle group</p>
          <i className="absolute -translate-y-1/2 fa-solid right-3 top-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Objects.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return(
                <button onClick={() => {
                  updateMuscles(muscleGroup)
                }} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : ' ')} key={muscleGroupIndex}>
                  <p className='uppercase'>{muscleGroup.replaceAll('_', " ")}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return(
            <button onClick={() => {
              setGoal(scheme)
            }} className={'py-3 duration-200 border rounded-lg bg-slate-950 ' + (scheme === goal ? 'border-blue-600' : 'border-blue-400')} key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Generator

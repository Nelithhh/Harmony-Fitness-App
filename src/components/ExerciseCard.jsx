import React, { useState } from 'react'

function ExerciseCard(props) {
    const { exercise, i } = props

    const [setsCompleted, setSetsComplete] = useState(0)

    function handleSetIncrement() {
        setSetsComplete((setsCompleted + 1) % 6)
    }

    return (
        <div className='flex flex-col gap-4 p-4 rounded-md bg-slate-950 sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='hidden text-3xl font-semibold sm:inline sm:text-4xl md:text-5xl text-slate-400'>
                    0{i + 1}
                </h4>
                <h2 className='flex-1 max-w-full text-lg capitalize truncate whitespace-nowrap sm:text-xl md:text-2xl sm:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
                <p className='text-sm capitalize text-slate-400'>{exercise.type}</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-sm text-slate-400'>Muscle Groups</h3>
                <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
            </div>

            <div className='flex flex-col gap-2 rounded bg-slate-950 '>
                {exercise.description.split('___').map((val) => {
                    return (
                        <div className='text-sm'>
                            {val}
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-cols-2 gap-2 sm:grid-cols-4 sm:place-items-center'>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full'>
                            <h3 className='text-sm capitalize text-slate-400'>{info === 'reps' ? `${exercise.unit}` : info}</h3>

                            <p className='font-medium'>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full duration-200'>
                    <h3 className='text-sm capitalize text-slate-400'>Sets completed</h3>
                    <p className='font-medium'>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    )
}

export default ExerciseCard
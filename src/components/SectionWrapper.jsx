import React from 'react'

function SectionWrapper(props) {

    const {children, header, title} = props

  return (
    <section className='flex flex-col min-h-screen gap-10'>
        <div className='flex flex-col items-center justify-center gap-2 py-10 bg-slate-950'>
            <p className='font-medium uppercase'>{header}</p>
            <h2 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='text-blue-400 uppercase'>{title[1]}</span> {title[2]}</h2>
        </div>
        {children}
    </section>
  )
}

export default SectionWrapper
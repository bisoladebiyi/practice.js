import Link from 'next/link'
import React from 'react'
import ExerciseCard from './exerciseCard'

const Exercises = () => {
  return (
    <div className='w-full'>
        <p className='font-semibold text-xl text-gray-700 mb-5'>Take some exercises</p>
        <div className='grid grid-cols-2 w-10/12 gap-8'>
            <ExerciseCard name="JS" fullName='Javascript' className='bg-amber-300' link="/exercises/javascript"/>
            <ExerciseCard name="TS" fullName='Typescript' className='bg-blue-500' link="/exercises/typescript"/>
            <ExerciseCard name="RT" fullName='React' className='bg-blue-300' link="/exercises/react"/>
      </div>      
    </div>
  )
}

export default Exercises
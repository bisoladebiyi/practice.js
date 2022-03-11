import Image from 'next/image'
import React from 'react'
import sad from '../images/sademoticon.svg'

const Progress = () => {
  return (
    <div className='w-full bg-gray-50 rounded-md pb-10 mb-14 mt-6'>
    <p className='font-semibold text-xl text-gray-700 mb-5 p-5'>Stuff you have started</p>
    <div className='w-full flex  flex-col items-center justify-center'>
<Image src={sad} alt="no progess yet" />
<p className='font-semibold text-gray-400 mt-2'>Nothing to see here...yet</p>
  </div>      
</div>
  )
}

export default Progress
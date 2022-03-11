import { Avatar } from '@mui/material'
import React from 'react'


interface Props {
    name: string | null
}

const DashboardNav = ({ name }: Props) => {

  return (
    <div className='flex items-center justify-between w-full p-5 px-8'>
        <p className='text-gray-700 font-bold text-3xl'>Hey there <span className='text-orange-400 font-black'>{name}!</span> 👋 </p>
        <button className='flex items-center justify-between rounded-xl bg-lighter-purp px-2'>
            <Avatar className='scale-75 mr-1 bg-orange-400' />
            <p className='font-bold text-purp'>{name}</p>
        </button>
    </div>
  )
}

export default DashboardNav
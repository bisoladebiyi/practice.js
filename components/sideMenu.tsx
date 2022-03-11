import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { logOutOfApp } from '../utils';
import { useRouter } from 'next/router';


const SideMenu = () => {
    const router = useRouter()
    const [ showTopics, setShowTopics ] = useState(true)
    const showHide = () => {
        setShowTopics(!showTopics)
    }
    const logOut = () => {
        logOutOfApp().then(() => router.push("/login") )
    }
  return (
    <div className='h-full w-3/12 bg-white shadow-gray-100 text-left shadow-inner'><br />
         <p className='font-black text-2xl text-gray-700 mt-4 pl-10 '>Practice<span className='text-purp'>.js</span></p>
         <div className='mt-6 flex flex-col items-center'>
             <div onClick={showHide} className='flex items-center rounded-md hover:bg-lighter-purp cursor-pointer transition-colors p-4 w-10/12'>
                 <SchoolRoundedIcon className='text-orange-400 scale-75 mr-6' />
                 <p>Exercises</p>
             </div>
             {showTopics && <div className='w-8/12'>
                <div className='flex items-center rounded-md hover:bg-lighter-purp cursor-pointer transition-colors p-4 '>
                    <ArrowRightRoundedIcon className='text-orange-400 scale-9 mr-2'  />
                    <p>Javascript</p>
                </div>
                <div className='flex items-center rounded-md hover:bg-lighter-purp cursor-pointer transition-colors p-4 '>
                    <ArrowRightRoundedIcon className='text-orange-400 scale-9 mr-2'  />
                    <p>Typescript</p>
                </div>
                <div className='flex items-center rounded-md hover:bg-lighter-purp cursor-pointer transition-colors p-4 '>
                    <ArrowRightRoundedIcon className='text-orange-400 scale-9 mr-2'  />
                    <p>React</p>
                </div>
                
            </div>}
            
             <div className='flex items-center rounded-md hover:bg-lighter-purp cursor-pointer transition-colors p-4 w-10/12'>
                 <SettingsIcon className='text-orange-400 scale-75 mr-6' />
                 <p>Settings</p>
             </div>
             <div onClick={logOut} className='flex items-center rounded-md hover:bg-lighter-purp cursor-pointer transition-colors p-4 w-10/12'>
                 <LogoutRoundedIcon className='text-orange-400 scale-75 mr-6' />
                 <p>Log Out</p>
             </div>
         </div>

    </div>
  )
}

export default SideMenu
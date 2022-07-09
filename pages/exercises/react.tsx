import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../../components/dashboardNav'
import HeadComponent from '../../components/head'
import SideMenu from '../../components/sideMenu'
import Topics from './components/topics'
import { auth } from '../../firebase'
import { reactTopics } from '../../topics'
import { DataType } from '../../types'

const ReactExercise = () => {
    const [userData, setUserData] =useState<DataType>({ name: ""})
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            setUserData({...userData, name: user?.displayName})
        })
    },[])
   
  return (
    <div className='containerDiv flex justify-between w-full important'>
         <HeadComponent title="Practice.js - Exercise React" />
        <SideMenu active="active-react"/>
        <div className='w-full overflow-scroll'>
        <DashboardNav name={userData.name} text="React.js ! 💙" className='text-blue-400'  />
        <div className='px-10 pb-10 h-full'>
        <Topics topics={reactTopics} subject="react" />
         </div>
      
      </div>
    </div>
  )
}

export default ReactExercise
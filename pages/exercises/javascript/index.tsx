import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../../../components/dashboardNav'
import HeadComponent from '../../../components/head'
import SideMenu from '../../../components/sideMenu'
import Topics from '../components/topics'
import { auth } from '../../../firebase'
import { jsTopics } from '../../../topics'
import { DataType } from '../../../types'


const Javascript = () => {
    const [userData, setUserData] =useState<DataType>({ name: ""})
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            setUserData({...userData, name: user?.displayName})
        })
    },[])
  return (
    <div className='containerDiv flex justify-between'>
      <HeadComponent title="Practice.js - Exercise Javascript" />
      <SideMenu active="active-js" />
      <div className='w-full overflow-scroll'>
        <DashboardNav name={userData.name} text="Javascript ! 💛" className='text-amber-300' />
        <div className='px-10 pb-10 h-full'>
        <Topics topics={jsTopics} subject="javascript" />
         </div>
      
      </div>
    </div>
  )
}

export default Javascript
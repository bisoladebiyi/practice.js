import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../../components/dashboardNav'
import HeadComponent from '../../components/head'
import SideMenu from '../../components/sideMenu'
import Topics from '../../components/topics'
import { auth } from '../../firebase'
import { tsTopics } from '../../topics'
import { DataType } from '../../types'

const Typescript = () => {
    const [userData, setUserData] =useState<DataType>({ name: ""})
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            setUserData({...userData, name: user?.displayName})
        })
    },[])
   
  return (
    <div className='container flex justify-between w-full important'>
         <HeadComponent title="Practice.js - Exercise Typescript" />
        <SideMenu active="active-ts"/>
        <div className='w-full overflow-scroll'>
        <DashboardNav name={userData.name} text="Typescript ! 💙" className='text-blue-600'  />
        <div className='px-10 pb-10 h-full'>
        <Topics topics={tsTopics} subject="typescript" />
         </div>
      
      </div>
    </div>
  )
}

export default Typescript
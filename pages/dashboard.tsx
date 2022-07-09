import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/dashboardNav'
import Exercises from '../components/exercises'
import HeadComponent from '../components/head'
import Progress from '../components/progress'
import SideMenu from '../components/sideMenu'
import { auth } from '../firebase'
import { DataType } from '../types'


const Dashboard = () => {
  const [ userData, setUserData ] = useState<DataType>({name: ""})
  const router = useRouter()
  useEffect(()=> {
    onAuthStateChanged(auth, user => {
      if(user){
        setUserData({...userData, name: user.displayName})
      }else{
        router.push("/login") 
      }
    })
    return () => setUserData({name: ""})

  }, [router])
  return (
    <div className='containerDiv flex justify-between'>
      <HeadComponent title="Practice.js - Dashboard" />
      <SideMenu />
      <div className='w-full overflow-scroll'>
        <DashboardNav name={userData.name} />
         <div className='px-10 pb-10'>
           <Progress />
         <Exercises />
         </div>
      
      </div>
    </div>
  )
}

export default Dashboard
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/dashboardNav'
import SideMenu from '../components/sideMenu'
import { auth } from '../firebase'

interface DataType {
  name: string | null
}
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
    <div className='container flex'>
      <SideMenu />
      <div className='w-full'>
        <DashboardNav name={userData.name} />
      </div>
    </div>
  )
}

export default Dashboard
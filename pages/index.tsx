import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const App = () => {
    const router = useRouter()
    useEffect(()=>{
router.push('/home')
    }, [router])
  return (
    <div></div>
  )
}

export default App
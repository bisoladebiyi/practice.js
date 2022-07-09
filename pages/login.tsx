import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../components/elements/button'
import HeadComponent from '../components/head'
import Input from '../components/elements/input'
import { auth } from '../firebase'
import { UserDataType } from '../types'
import { logIntoAccount } from '../utils'

const Login = () => {
const [loginDetails, setLoginDetails] = useState<UserDataType>(loginData)
const router = useRouter()
useEffect(()=> {
onAuthStateChanged(auth, user => {
  if(user){
    router.push("/dashboard") 
  }
})
}, [router])
  const logIn = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    logIntoAccount(loginDetails).then((res) => console.log(res)).then(()=> router.push("/dashboard")).catch((err)=> console.log(err))
   
  }
  return (
    <div className='containerDiv grid place-items-center'>
       <HeadComponent title="Practice.js - Log In" />
    <div className='text-center w-1/2 bg-slate-100 p-10 rounded-sm h-full grid place-items-center'>
        <div className='w-full'>
        <Link href="/" passHref><p className='font-black text-5xl text-gray-700 cursor-pointer'>Practice<span className='text-purp'>.js</span></p></Link>
        <p className='font-bold text-xl text-gray-700 mt-8'>Welcome Back!</p>
        <p className='font-bold text-lg text-gray-600 mb-8'>Have you practiced today? Keep going 💪</p>
        <form action="" onSubmit={(e) => logIn(e)}>
             <div className='flex flex-col items-center'>
            <Input type={"email"} placeholder="Email" focus={true} value={loginDetails.email} id="email" user={loginDetails} setUser={setLoginDetails} />
            <Input type={"password"} placeholder="Password" value={loginDetails.password} id="password" user={loginDetails} setUser={setLoginDetails} />
             </div>
             <Button type="submit" size='large' noTransparentBg = 'true' className='btn'>Log In</Button>  
        </form>
        <p className='mt-4'>Don&apos;t have an account? <Link href={'/signup'} passHref><span className='text-purp cursor-pointer font-semibold'>Sign Up.</span></Link></p>
        </div>
        
    </div>

 </div>
  )
}

const loginData = {
  email: "",
  password: ""
}

export default Login
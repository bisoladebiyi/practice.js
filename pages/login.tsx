import Link from 'next/link'
import React from 'react'
import Button from '../components/button'
import Input from '../components/input'

const Login = () => {
  return (
    <div className='container grid place-items-center'>
    <div className='text-center w-1/2 bg-slate-100 p-10 rounded-sm h-full grid place-items-center'>
        <div className='w-full'>
        <p className='font-black text-5xl text-gray-700 cursor-pointer'>Practice<span className='text-purp'>.js</span></p>
        <p className='font-bold text-xl text-gray-700 mt-8'>Welcome Back!</p>
        <p className='font-bold text-lg text-gray-600 mb-8'>Have you practiced today? Keep going 💪</p>
        <form action="">
             <div className='flex flex-col items-center'>
            <Input type={"email"} placeholder="Email" focus={true} />
            <Input type={"password"} placeholder="Password" />
             </div>
             <Button size='large' noTransparentBg = 'true' className='btn'>Log In</Button>  
        </form>
        <p className='mt-4'>Don&apos;t have an account? <Link href={'/signup'} passHref><span className='text-purp cursor-pointer font-semibold'>Sign Up.</span></Link></p>
        </div>
        
    </div>

 </div>
  )
}

export default Login
import Link from 'next/link'
import React from 'react'
import Button from '../components/button'
import Input from '../components/input'

const Signup = () => {
  return (
    <div className='container grid place-items-center'>
       <div className='text-center w-1/2 bg-slate-100 p-10 rounded-sm h-full grid place-items-center'>
           <div className='w-full'>
           <p className='font-black text-5xl text-gray-700 cursor-pointer'>Practice<span className='text-purp'>.js</span></p>
           <p className='font-bold text-xl text-gray-700 mt-8'>Welcome!</p>
           <p className='font-bold text-lg text-gray-600 mb-8'>Let&apos;s get you started. Create an account today...</p>
           <form action="">
                <div className='flex flex-col items-center'>
                <Input type={"text"} placeholder="First Name" focus={true} />
               <Input type={"text"} placeholder="Last Name" />
               <Input type={"email"} placeholder="Email" />
               <Input type={"password"} placeholder="Password" />
               <Input type={"password"} placeholder="Confirm Password" />
                </div>
                <Button size='large' noTransparentBg = 'true' className='btn'>Create Account</Button>  
           </form>
           <p className='mt-4'>Already have an account? <Link href={'/login'} passHref><span className='text-purp cursor-pointer font-semibold'>Log In.</span></Link></p>
           </div>
           
       </div>

    </div>
  )
}

export default Signup
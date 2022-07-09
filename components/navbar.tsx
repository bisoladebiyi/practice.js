import Link from 'next/link'
import React from 'react'
import Button from './elements/button'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-11/12 mx-auto py-8 border-gray-300 border-b'>
       <Link href={"/home"} passHref><div className='font-black text-2xl text-gray-700 cursor-pointer'>Practice<span className='text-purp'>.js</span></div></Link> 
        <div className='flex'>
        <Link href={"/signup"} passHref><div><Button outline='true' size='small' className='mr-2'>Sign Up</Button></div></Link>
        <Link href={"/login"} passHref><div><Button size='small' outline='false'>Log In</Button></div></Link>
        </div>
    </div>
  )
}

export default Navbar
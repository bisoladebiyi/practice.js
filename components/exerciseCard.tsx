import Link from 'next/link';
import React from 'react'

interface Props {
    name: string;
    fullName: string;
    desc?: string;
    className: string;
    link: string
}
const ExerciseCard:React.FC<Props> = ({name,fullName, desc, className, link}) => {
  return (
   <Link href={link} passHref><div className={`w-full h-44 rounded-md relative overflow-hidden flex items-center cursor-pointer hover:shadow-md hover:transition-shadow shadow-purp ${className}`}>
   <p className='font-black text-white text-9xl -rotate-90 absolute -left-8 top-5 opacity-20'>{name}</p>
   <p className='text-white font-bold text-xl px-5 text-center'>Let&apos;s do some work 💪. Practice {fullName} today!</p>
</div></Link> 
  )
}

export default ExerciseCard
import React from 'react'

interface Props{
    type: string;
    placeholder: string;
    focus?: boolean;
}
const Input:React.FC<Props> = ({ type, placeholder, focus}) => {
  return (
    <input type={type} placeholder={placeholder} className="w-10/12 block mb-6 h-12 px-4 outline-none rounded border border-gray-200 focus:border-l-2 focus:border-l-orange-300" autoFocus={focus} />
  )
}

export default Input
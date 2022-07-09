import React, { ChangeEvent } from 'react'
import { UserDataType } from '../../types';

interface Props{
    type: string;
    placeholder: string;
    focus?: boolean;
    value?: string;
    id: string;
    user: UserDataType
    setUser: React.Dispatch<React.SetStateAction<UserDataType>> 
}
const Input:React.FC<Props> = ({ type, placeholder, focus, value, setUser, id, user}) => {
  const changeValue = (e:ChangeEvent<HTMLInputElement>) => {
    const newData: UserDataType = { ...user }
    newData[id as keyof UserDataType] = e.target.value
    setUser(newData)
  }
  return (
    <input type={type} placeholder={placeholder} onChange={(e)=> changeValue(e)} className="w-10/12 block mb-6 h-12 px-4 outline-none rounded border border-gray-200 focus:border-l-2 focus:border-l-orange-300" autoFocus={focus} id={id} value={value} />
  )
}

export default Input
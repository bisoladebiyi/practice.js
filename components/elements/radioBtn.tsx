import React, { useEffect, useState } from 'react'

interface RadioTypes {
  option: string
  getAnswer: (option: string) => void
}
const RadioBtn: React.FC<RadioTypes> = ({ option, getAnswer }) => {
  return (
    <div className='flex items-center space-x-4'>
      <input type="radio" name="question" id="" onClick={() => getAnswer(option)} />
      <label htmlFor="">{option}</label>
    </div>
  )
}

export default RadioBtn 
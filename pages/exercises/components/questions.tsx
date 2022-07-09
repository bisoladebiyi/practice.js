import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import RadioBtn from '../../../components/elements/radioBtn'

interface Props{
    questionProp: QueryDocumentSnapshot<DocumentData>
    index: number
    getAnswer: (option: string) => void
}

const Question:React.FC<Props> = ({ questionProp, index, getAnswer }) => {
  
  return (
    <div>
        <p className='font-bold text-xl text-gray-700'>{questionProp.data().question}</p>
        <div className='mt-6'>
            {questionProp.data().options.map((option: string, index:number) => (
                <div key={index} className="p-3">
                    <RadioBtn getAnswer={getAnswer} option={option} />
                </div>
            ))}    
        </div>

    </div>
  )
}

export default Question 
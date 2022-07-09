/* eslint-disable @next/next/no-img-element */
import { collection, DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebase';
import { QuestionTypes } from '../../../../types';
import Question from '../../components/questions';

const Result = () => {
    const [questions, setQuestions] = useState<QuerySnapshot<DocumentData>>();
    const router = useRouter()
    const [userScore, setUserScore] = useState(0)

    useEffect(() => {
        const data = onSnapshot(
          collection(db, "exercises", "javascript123", router.query.id + "123"),
          (snapshot) => {
            setQuestions(snapshot); 
            snapshot.docs[0].data().questions.map((q: QuestionTypes) => {
                if(q.correctOption == q.optionPicked){
                    setUserScore(userScore + 1)
                } else{
                    return
                }
            })
          }
        );
        return data
    }, [router.query.id]);

  return (
    <div className='grid grid-cols-3 h-full'>
        <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            <h2 className='text-amber-500 font-bold text-3xl'>Well done!</h2>
            <img className='w-48' src="https://img.freepik.com/premium-vector/gold-trophy-with-name-plate-winner-competition_68708-545.jpg?w=1060" alt="" />
            <p className='text-xl font-medium'>Your score is   <span className='text-green-500 font-semibold'>{userScore}/{questions?.docs[0].data().questions.length}</span></p>
            <Link href="/dashboard" passHref><p className='text-blue-600 underline cursor-pointer mt-5'>Back to dashboard</p></Link>
        </div>
        </div>
        
        <div className='bg-slate-50 h-full col-span-2 p-20'>
            <h2 className='font-black text-4xl underline mb-3'>Results</h2>
            <div className='mt-7'>
            {questions?.docs[0].data().questions.map((question: QuestionTypes, index:number) => (
              <div key={index} className="flex">
                  <p className={`mr-3 font-semibold w-7 h-7 flex justify-center items-center text-white ${question.correctOption === question.optionPicked ? 'bg-green-400' : 'bg-red-400'} rounded-full`}>{index+1}</p>
                  <div className='font-semibold'>
                      <p>{question.question}</p>
                      <p>Option picked: <span className={`${question.correctOption === question.optionPicked ? 'text-green-600 font-bold' : 'text-red-600 font-bold' }`}>{question.optionPicked}</span></p>
                      <p>Correct option: <span className='text-green-600 font-bold'>{question.correctOption}</span></p>
                  </div>
                
              </div>
            ))}
            </div>
        
        </div>
    </div>
  )
}

export default Result
import {
  collection,
  doc,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Question from "../../components/questions";
import { db } from "../../../../firebase";
import Button from "../../../../components/elements/button";

const Exercises = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<any>();
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<string>('')
  const questionRef = doc(db, "exercises", "javascript123", router.query.id + "123", "questions123")

  useEffect(() => {
    const data = onSnapshot(
      collection(db, "exercises", "javascript123", router.query.id + "123", "questions123", "questions"),
      (snapshot) => {
        setQuestions(snapshot.docs); 
        console.log(snapshot.docs);
      }
    );
    return data
  }, [router.query.id])

  const getAnswer = (option: string) => {
    setAnswer(option)
  }
  const showNext = async() => {
    await updateDoc(questionRef, { "questions.0.optionPicked": answer})
    setIndex(index + 1)
  }
  const submitExercise = async() => {
    await updateDoc(questionRef, { "questions.0.optionPicked": answer})
    await updateDoc(questionRef, { solved : true})
    router.push(`${router.query.id}/result`)
  }
  return (
    <div className="containerDiv w-full grid place-items-center">
      <div className="w-10/12 h-full bg-slate-50 p-10 rounded-sm">
        <p className="capitalize text-3xl font-bold text-light-purp tracking-wide border-b-2 border-lighter-purp rounded inline-block">
          {router.query.id}
        </p>
        {!questions ? (
          <p>loading...</p>
        ) : (
          <div className="bg-slate-50 mt-10 px-6">
              <div>
                <Question getAnswer={getAnswer}  index={index} questionProp={questions[index]} />
              </div>
            {index !== (questions?.length - 1) ? <Button size="big" onClick={showNext}  className="float-right mt-32">Next</Button> : <Button size="big" onClick={submitExercise} className="float-right mt-32">Finish</Button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;

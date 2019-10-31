import React, { useEffect, useState } from "react";
import { getQuestions, GetQuestionsRes } from "../client/geing/getQuestions";
import Question from "../models/question";

const QuestionsList = () => {
  const [data, setQuestions] = useState({ questions: [] as Question[] })

  useEffect(() => {
    const fetchQuestions = async (page: number) => {
      const res: GetQuestionsRes = await getQuestions({ page: 0 })
      setQuestions({ questions: res.questions })
    }

    try {
      fetchQuestions(0)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <>
      <ul>
        {data.questions.map((q: Question) => {
          return <li>{q.body}</li>
        })}
      </ul>
    </>
  )
}

export default QuestionsList

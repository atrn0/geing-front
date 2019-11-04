import React, { useEffect, useState } from 'react'
import { getQuestions, GetQuestionsRes } from '../client/geing/getQuestions'
import Question from '../models/question'
import styles from './QuestionsList.module.scss'

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
      <div className={styles.questions}>
        {data.questions.map((q: Question) => {
          return (
            <img
              alt={q.body}
              src={`https://res.cloudinary.com/dfrif3y8l/image/upload/w_800/c_fit,q_10,h_300,l_text:omklw31ggvthvlk7b8i3.ttf_40:${encodeURIComponent(
                q.body
              )},w_700,y_-15/geing-ogp`}
            />
          )
        })}
      </div>
    </>
  )
}

export default QuestionsList

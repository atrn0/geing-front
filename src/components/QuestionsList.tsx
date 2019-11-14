import React, { useEffect, useState } from 'react'
import { getQuestions, GetQuestionsRes } from '../client/geing/getQuestions'
import Question from '../models/question'
import styles from './QuestionsList.module.scss'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const QuestionsList = () => {
  const [data, setQuestions] = useState({ questions: [] as Question[] })
  const [offset, setOffset] = useState(0)
  const [isAllQFetched, setIsAllQFetched] = useState(false)

  const fetchQuestions = async (offset: number) => {
    const res: GetQuestionsRes = await getQuestions({ offset: offset })
    if (res.questions.length < 20) {
      setIsAllQFetched(true)
    }
    setQuestions({ questions: res.questions })
  }

  useEffect(() => {
    try {
      fetchQuestions(0)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    if (data.questions.length === 0) return
    setOffset(data.questions.slice(-1)[0].id)
  }, [data])

  return (
    <div className={styles.questions}>
      {data.questions.map((q: Question) => {
        return (
          <Link key={q.id} to={`/${q.id}`}>
            <span>{dayjs(q.created_at).format('MM/DD')}</span>
            <img
              alt={q.body}
              src={`https://res.cloudinary.com/dfrif3y8l/image/upload/w_800/c_fit,q_10,h_300,l_text:omklw31ggvthvlk7b8i3.ttf_40:${encodeURIComponent(
                q.body
              )},w_700,y_-15/geing-ogp`}
            />
            <div>
              <span>回答をみる</span>
            </div>
          </Link>
        )
      })}
      {!isAllQFetched ? (
        <div className={styles.moreButton}>
          <button onClick={() => fetchQuestions(offset)}>more</button>
        </div>
      ) : null}
    </div>
  )
}

export default QuestionsList

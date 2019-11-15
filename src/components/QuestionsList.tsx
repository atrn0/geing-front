import React, { useEffect, useState } from 'react'
import { getQuestions, GetQuestionsRes } from '../client/geing/getQuestions'
import Question from '../models/question'
import styles from './QuestionsList.module.scss'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { getOgpImage } from '../utils/cloudinary'

const QuestionsList = () => {
  const [data, setQuestions] = useState({ questions: [] as Question[] })
  const [offset, setOffset] = useState(0)
  const [isAllQFetched, setIsAllQFetched] = useState(false)

  const fetchQuestions = async (offset: number) => {
    const res: GetQuestionsRes = await getQuestions({ offset: offset })
    if (res.questions.length < 10) {
      setIsAllQFetched(true)
    }
    setQuestions({ questions: data.questions.concat(res.questions) })
  }

  useEffect(() => {
    try {
      fetchQuestions(10000000)
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
            <img alt={q.body} src={getOgpImage(q.body)} />
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
